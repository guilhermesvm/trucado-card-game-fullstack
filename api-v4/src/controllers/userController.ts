import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import UserRepository from "../repositories/userRepository";

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
    const user = await this.userRepository.getById(userId);
    if (!user) {
        res.status(404).send('User not found');
        return
    } 
    res.status(200).json(user);
  };

  create = async (req: Request, res: Response): Promise<void> => {
      const newUser = await this.userRepository.create(req.body);
      res.status(201).json({message: "User added", user: newUser});
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);

    const updatedUser = await this.userRepository.update(userId, req.body);
    if (!updatedUser) {
        res.status(404).send('User not found');
        return;
    }
    res.status(200).json(updatedUser);
    
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);

    const success = await this.userRepository.delete(userId);
    if (!success) {
        res.status(404).send('User not found');
        return;
    } 

    res.status(204).send();
    
  };
}