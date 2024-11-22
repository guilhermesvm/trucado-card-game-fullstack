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
        if(isNaN(teamId)){
            res.status(400).json({message: "Invalid team ID."});
            return;
        }

        const team = await this.teamRepository.getById(teamId);
        if (!team) {
            res.status(404).json({message: 'Team not found'});
        }

        res.status(200).json(team);
        
    };

    create = async (req: Request, res: Response): Promise<void> => {
        const newTeam = await this.teamRepository.create(req.body);
        res.status(201).json({message: "Team added", team: newTeam});
    };

    update = async (req: Request, res: Response): Promise<void> => {
        const teamId = parseInt(req.params.id);

        const updatedTeam = await this.teamRepository.update(teamId, req.body);
        if (!updatedTeam) {
            res.status(404).json({message:'Team not found'});
            return;
        } 
        res.status(200).json({message: "Team was successfully updated.", team: updatedTeam});
        
    };

    delete = async (req: Request, res: Response): Promise<void> => {
        const success = await this.teamRepository.delete(parseInt(req.params.id));
        if (!success) {
            res.status(404).json({message: 'Team not found'});
            return;
        } 

        res.status(204).json({message: "Team was successfully deleted | Nothing was deleted."});
        }
    }