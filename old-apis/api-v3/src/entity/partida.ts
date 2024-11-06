import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, JoinTable, ManyToMany } from "typeorm"
import { Usuario } from "./usuario"
import { Time } from "./time"
import { Campeonato } from "./campeonato"

@Entity()
export class Partida {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    data: Date

    @ManyToMany(() => Usuario)
    @JoinTable()
    usuarios: Usuario[]

    @ManyToMany(() => Time)
    @JoinTable()
    times: Time[]

    @ManyToOne(() => Campeonato, campeonato => campeonato.partidas)
    @JoinColumn()   //FK
    campeonato: Campeonato
}
