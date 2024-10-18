import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import TeamRepository from "../repositories/teamRepository";

export class TeamController {
  private teamRepository: TeamRepository;

  constructor() {
      this.teamRepository = new TeamRepository(appDataSource);
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
      const team = await this.teamRepository.getAll();
      res.status(200).json(team);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const teamId = parseInt(req.params.id);
    const team = await this.teamRepository.getById(teamId);
    if (!team) {
        res.status(404).send('Team not found');
    } else {
        res.status(200).json(team);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
      const newTeam = await this.teamRepository.create(req.body);
      res.status(201).json({message: "Team added"});
  };

  update = async (req: Request, res: Response): Promise<void> => {
      const updatedTeam = await this.teamRepository.update(parseInt(req.params.id), req.body);
      if (!updatedTeam) {
          res.status(404).send('Team not found');
      } else {
          res.status(200).json(updatedTeam);
      }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
      const success = await this.teamRepository.delete(parseInt(req.params.id));
      if (!success) {
          res.status(404).send('Team not found');
      } else {
          res.status(204).send();
      }
  };
}