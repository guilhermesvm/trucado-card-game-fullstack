import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { Match } from "./match"
import { Team } from "./team"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @Column()
  email?: string

  @Column()
  password?: string

  @ManyToMany(() => Match, matches => matches.users, { lazy: true })
  matches?: Match[]

  @ManyToMany(() => Team, team => team.users, { lazy: true })
  teams?: Team[]

  constructor(
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    matches?: Match[],
    teams?: Team[]
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.matches = matches
    this.teams = teams
  }
}

export default User