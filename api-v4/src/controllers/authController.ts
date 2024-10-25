import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import UserRepository from "../repositories/userRepository";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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
            
            const user = await this.userReposity.getByLogin(email);

            if(user?.password !== password){
                res.status(401).json({message: "Invalid credentials."});
                return;
            }

            const token = jwt.sign({
                auth: true,
                email: email
            }, process.env.TOKEN_KEY!, {expiresIn: "1h"} )

            res.status(200).json({message: "Logged in successfully.", auth: true, token: token});
        } 
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error." });
        }
    }
}