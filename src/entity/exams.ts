import { Exam } from 'src/types/exam';
import { ExamType } from 'src/types/exam-type';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Questions } from './questions';

@Entity('exams')
export class Exams implements Exam{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    type: ExamType;
    @Column(type => Questions)
    questions?:Questions[];
}