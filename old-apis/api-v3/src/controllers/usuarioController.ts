import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Usuario} from "../entity/usuario";
import dotenv from "dotenv";

dotenv.config();

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const results: Usuario[] = await AppDataSource.getRepository(Usuario).find();

        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuario."});
    }
}

export const getUsuariosId = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id; //"+" é usado p converter parametro p/ number
        const results: Usuario = await AppDataSource.getRepository(Usuario).findOneBy({id: id});

        return res.status(200).send(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar usuario.' });
    }
}

export const postUsuarios = async (req: Request, res: Response) => {
    try {  
        const usuarioRepository: Usuario[] =  AppDataSource.getRepository(Usuario).create(req.body);
        const results: Usuario[] = await AppDataSource.getRepository(Usuario).save(usuarioRepository);

        return res.status(201).send(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao inserir usuario."});
    }
}

export const putUsuarios = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;

        if(!id){
            return res.status(400).json({message: "Usuário não encontrado."});
        }

        const usuario: Usuario = await AppDataSource.getRepository(Usuario).findOneBy({id: id});

        if(!usuario){
            return res.status(400).json({message: "Usuário inválido."});
        }

        AppDataSource.getRepository(Usuario).merge(usuario, req.body);
        const results: Usuario = await AppDataSource.getRepository(Usuario).save(usuario);

        return res.status(200).json({message: "Usuário alterado com sucesso."});
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro ao inserir usuario."});
    }
 }

export const deleteUsuarios = async(req: Request, res: Response) => {
    try {
        const id = +req.params.id;

        if(!id){
            res.send(400).json({message: "Usuário não encontrado"});
        }
        const results = await AppDataSource.getRepository(Usuario).delete(id);

        return res.status(200).json({message: "Usuário deletado com sucesso | Nada foi deletado."});
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar usuário."});
    }
}