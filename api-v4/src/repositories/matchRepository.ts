import { DataSource, Repository } from 'typeorm'
import MatchEntity from '../entities/match'

class MatchRepository implements MatchRepository {
    private repository: Repository<MatchEntity>

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(MatchEntity);
    }

    async getAll(): Promise<MatchEntity[]> {
        return this.repository.find()
    }

    async getById(id: number): Promise<MatchEntity | undefined> {
        const match = await this.repository.findOne({ 
            where: {id},
            relations: ['users', 'teams', 'winnerUser', 'winnerTeam', 'tournament'] 
        });
        return match || undefined
    }

    async create(match: Omit<MatchEntity, 'id'>): Promise<MatchEntity> {
        const newMatch = this.repository.create(match)
        return this.repository.save(newMatch)
    }

    async update(id: number, match: Partial<Omit<MatchEntity, 'id'>>): Promise<MatchEntity | undefined> {
        const matchToUpdate = await this.getById(id)
        if (!matchToUpdate) {
            return undefined
        }
        const updatedMatch = this.repository.merge(matchToUpdate, match);
        return await this.repository.save(updatedMatch);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id)
        return result?.affected ? result.affected > 0 : false
    }

    async save(match: MatchEntity): Promise<boolean> {
        const result = await this.repository.save(match);
        return result ? true : false;
    }
}

export default MatchRepository