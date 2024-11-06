import { Request, Response } from "express";
import MatchRepository from "../repositories/matchRepository";
import { appDataSource } from "../data-source";
import TournamentRepository from "../repositories/tournamentRepository";
import UserRepository from "../repositories/userRepository";
import Match from "../entities/match";
import TeamRepository from "../repositories/teamRepository";
import { error } from "console";

export class MatchController {
    private matchRepository: MatchRepository;
  
    constructor() {
        this.matchRepository = new MatchRepository(appDataSource);
    }

    getAll = async (req: Request, res: Response): Promise<void> => {
        const matches = await this.matchRepository.getAll();
        res.status(200).json(matches);
    };

    getById = async (req: Request, res: Response): Promise<void> => {
        const matchId = parseInt(req.params.id);

        const match = await this.matchRepository.getById(matchId);
        if (!match) {
            res.status(404).json({message: "Match not found" });
            return;
        } 

        res.status(200).json(match);
        
    };

     create = async (req: Request, res: Response): Promise<void> => {
        const tournamentRepository: TournamentRepository = new TournamentRepository(appDataSource)        
        const userRepository: UserRepository = new UserRepository(appDataSource)
        const teamRepository: TeamRepository = new TeamRepository(appDataSource)

        const tournamentId = req.body.tournament
        const usersIds = req.body.users
        const teamsIds = req.body.teams
        const date = req.body.date
                 
        const tournament = await tournamentRepository.getById(tournamentId)
        if(!tournament) {
            res.status(404).json({message: "Tournament not found!"});
            return;
        }

        const users = await userRepository.getBy(usersIds);
        if(users && users.length !== 2) {
            res.status(404).json({message: "Incorret user count."});
            return;
        }

        if(teamsIds){
            const teams = await teamRepository.getBy(teamsIds);
            if(teams && teams.length !== 2) {
                res.status(404).json({message: "Incorret team count."});
                return;
            }
        }

        

        const match = new Match();
        match.date = date;
        match.users = users;
        match.teams = teamsIds;
        match.tournament = tournament;

        const newMatch = this.matchRepository.create(match);
        res.status(201).json({message: "Match added.", match: newMatch});
    }

    update = async (req: Request, res: Response): Promise<void> => {
        const {matchId, userId} = req.body;
        const matchRepository: MatchRepository = new MatchRepository(appDataSource);
        const userRepository: UserRepository = new UserRepository(appDataSource);

        const match = await matchRepository.getById(matchId);
        if(!match){
            res.status(404).json({message: "Match not found."});
            return;
        }

        const winnerUser = await userRepository.getById(userId);
        if(!winnerUser){
            res.status(404).json({message: "User not found."});
            return;
        }

        match!.winnerUser = winnerUser;
        const result = await matchRepository.save(match!)
        if(result)
            res.status(200).json({message: "Match was successfully updated.",});
        else
            throw error;
    }

    delete = async(req: Request, res: Response): Promise<void> => {
        const matchId = parseInt(req.params.id);
        const success = await this.matchRepository.delete(matchId);

        if(!success){
            res.status(404).json({message: "Match not found."});
            return;
        }
        res.status(204).json({message: "Match was successfully deleted | Nothing was deleted."});
    }
}