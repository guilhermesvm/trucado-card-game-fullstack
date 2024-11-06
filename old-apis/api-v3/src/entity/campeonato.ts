import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Partida } from "./partida"

@Entity()
export class Campeonato {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToMany(() => Partida, partidas => partidas.campeonato)
    partidas: Partida[]
}
