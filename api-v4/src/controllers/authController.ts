import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import UserRepository from "../repositories/userRepository";

export class AuthController {
    private userReposity: UserRepository;

    constructor() {
        this.userReposity = new UserRepository(appDataSource);
    }

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            if(!email || !password){
                res.status(400).json({message: "Credentials are required."});
                return;
            }

            const data = await this.userReposity.getByLogin(email, password);

            if(!data?.email || !data?.password){
                res.status(401).json({message: "Invalid credentials."});
                return;
            }

            res.status(200).json({message: "Logged in successfully."});
        } 
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error." });
        }
    }
}