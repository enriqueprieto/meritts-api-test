import { Option } from "src/types/option";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Options implements Option{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    key: string;
    @Column()
    value: string;
    @Column()
    correct: boolean;
}