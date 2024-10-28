import { Request, Response } from "express";

export class HealthController {
    healthCheck = async(req: Request, res: Response): Promise<void> => {
        const healthCheck = {
            message: "Success.",
            uptime: process.uptime(),
            timestamp: Date.now()
        };
        
        try {
            res.status(200).json(healthCheck);
        } catch (error: any) {
            healthCheck.message = error;
            res.status(503).send();
        }
        
    }
}