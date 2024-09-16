import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Campeonato } from "../entity/campeonato";

export const postCampeonatos = async (req: Request, res: Response) => {
    try {
        const novoCampeonato: Campeonato[] = await AppDataSource.getRepository(Campeonato).create(req.body);
        await AppDataSource.getRepository(Campeonato).save(novoCampeonato);
        res.status(201).json({message: "Campeonato criado."});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Não foi possível criar um campeonato."});
    }
}