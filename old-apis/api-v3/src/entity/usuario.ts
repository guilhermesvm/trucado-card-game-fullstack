import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Partida } from "./partida"
import { Time } from "./time"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string
    
    @ManyToMany(() => Partida, partidas => partidas.usuarios)
    partidas: Partida[]

    @ManyToMany(() => Time, times => times.usuarios)
    times: Time[]
}
