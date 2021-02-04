import { Option } from 'src/types/option';
import { Question } from 'src/types/question';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Options } from './options';

@Entity()
export class Questions implements Question{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    statement: string;
    @Column(type => Options)
    options: Options[];
}