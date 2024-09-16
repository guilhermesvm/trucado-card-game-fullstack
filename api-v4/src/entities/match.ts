import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { Tournament } from './tournament'
import { User } from './user'
import { Team } from './team'

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({ nullable: true })
    date?: Date

    @ManyToOne(() => Tournament, tournament => tournament.matches)
    @JoinTable()
    tournament?: Tournament;

    @ManyToMany(() => User, { nullable: true })
    @JoinTable()
    users?: User[]

    @ManyToMany(() => Team, { nullable: true })
    @JoinTable()
    teams?: Team[]

    @ManyToOne(() => User, { nullable: true })
    @JoinTable()
    winnerUser?: User

    @ManyToOne(() => Team, { nullable: true })
    @JoinTable()
    winnerTeam?: Team

    constructor(
        id?: number,
        date?: Date | undefined,
        tournament?: Tournament,
        users?: User[],
        teams?: Team[],
        winnerUser?: User,
        winnerTeam?: Team
    ) {
        this.id = id
        this.date = date;
        this.tournament = tournament;
        this.users = users;
        this.teams = teams;
        this.winnerUser = winnerUser;
        this.winnerTeam = winnerTeam;
    }
}

export default Match