import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from "typeorm"
import { Usuario } from "./usuario"

@Entity()
export class Time {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @ManyToMany(() => Usuario, usuarios => usuarios.times)
    @JoinColumn()
    usuarios: Usuario[]
}
