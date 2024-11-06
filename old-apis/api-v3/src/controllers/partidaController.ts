import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Partida } from "../entity/partida";
import { Campeonato } from "../entity/campeonato";
import { Usuario } from "../entity/usuario";
import { In } from "typeorm";

export const postPartidas = async (req: Request, res: Response) => {
    try {
        const partidaRepository = AppDataSource.getRepository(Partida);
        const campeonatoRepository = AppDataSource.getRepository(Campeonato);
        const usuarioRepository = AppDataSource.getRepository(Usuario);

        //const {campeonatoId, usuariosId, data} = req.body; //Espera os nomes do  text json

        const campeonatoId = req.body.campeonato;
        const usuariosId = req.body.usuarios;
        const data = req.body.data;

        const campeonato: Campeonato = await campeonatoRepository.findOneBy({id: campeonatoId});
        if(!campeonato){
            res.status(400).json({message: "Campeonato não encontrado."});
        }

        const usuarios: Usuario[] = await usuarioRepository.findBy({
            id: In(usuariosId.map((usuarios: {id: number}) => usuarios.id))
        });

        if(usuarios.length !== 2){
            return res.status(400).json({message: "Número de usuários inválido."});
        }

        const novaPartida = partidaRepository.create({data, usuarios, campeonato});
        await partidaRepository.save(novaPartida);
        res.status(201).json({message: "Partida criada."});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Não foi possível criar uma partida."});
    }
}