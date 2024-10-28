import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import UserRepository from "../repositories/userRepository";
import HttpError from "../errors/http-error";
import bcrypt from "bcryptjs"
import InternalError from "../errors/internal-error";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
      this.userRepository = new UserRepository(appDataSource);
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
      const users = await this.userRepository.getAll();
      res.status(200).json(users);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);
    
    if(isNaN(userId)){
      res.status(400).json({message: "Invalid user ID."})
    }

    const user = await this.userRepository.getById(userId);
    if (!user) {
        res.status(404).json({message: 'User not found.'});
        return;
    } 
    res.status(200).json(user);
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      let {name, email, password} = req.body;
      if(!name || !email || !password){
        res.status(400).json({message: "All user data is required."});
        return;
      }

      const existingUser = await this.userRepository.getByEmail(email.toLowerCase())
      if(existingUser){
        res.status(400).json({message: "Email already in use."});
        return;
      }
 
      const hashedPassword = await bcrypt.hash(password, 3);

      const newUser = await this.userRepository.create({
        name: name, 
        email: email,
        password: hashedPassword
      });

      res.status(201).json({message: "User added", user: newUser});
      
    } catch (error) {
      console.error(error)
      throw new InternalError(500, "Internal Server Error");
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);

    const updatedUser = await this.userRepository.update(userId, req.body);
    if (!updatedUser) {
        res.status(404).json({message:'User not found.'});
        return;
    }
    res.status(200).json({message: "User was succesfully updated",  user: updatedUser});
    
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);

    const success = await this.userRepository.delete(userId);
    if (!success) {
        res.status(404).json({message:'User not found.'});
        return;
    } 

    res.status(204).json({message: "User was successfully deleted. | Nothing was deleted."})
  };
}