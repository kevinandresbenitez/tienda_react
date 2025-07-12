import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar',length:50})
    name:string

    @Column({type:'varchar',length:50})
    last_name:string

    @Column({type:'varchar',length:20, unique:true})
    email:string

    @Column({type:'varchar',length:100})
    password:string
}