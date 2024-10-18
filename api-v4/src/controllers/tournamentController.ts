import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import TournamentRepository from "../repositories/tournamentRepository";

export class TournamentController {
  private tournamentRepository: TournamentRepository;

  constructor() {
      this.tournamentRepository = new TournamentRepository(appDataSource);
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
      const tournaments = await this.tournamentRepository.getAll();
      res.status(200).json(tournaments);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const tournamentId = parseInt(req.params.id);
    const tournament = await this.tournamentRepository.getById(tournamentId);
    if (!tournament) {
        res.status(404).json({message:'Tournament not found'});
        return;
    }
    res.status(200).json(tournament);
      
  };

  create = async (req: Request, res: Response): Promise<void> => {
      const newTournament = await this.tournamentRepository.create(req.body);
      res.status(201).json({message: "Tournament added", tournament: newTournament});
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const tournamentId = parseInt(req.params.id);

    const updatedTournament = await this.tournamentRepository.update(tournamentId, req.body);
    if (!updatedTournament) {
        res.status(404).send('Tournament not found');
        return;
    } 
    res.status(200).json(updatedTournament);
      
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const tournamentId = parseInt(req.params.id);
    const success = await this.tournamentRepository.delete(tournamentId);
    if (!success) {
        res.status(404).send('Tournament not found');
        return;
    } 
    res.status(204).send();
    
  };
}