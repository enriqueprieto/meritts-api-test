import { Option } from 'src/types/option';
import { Question } from 'src/types/question';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Exams } from './exams';
import { Options } from './options';

@Entity()
export class Questions implements Question{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    statement: string;
    @OneToMany(() => Options, option => option.question)
    @JoinTable()
    options: Options[];
    @ManyToMany(() => Exams, exam => exam.questions)
    exams: Exams[];
    constructor(question?:Questions){
        if(question){
            if(question.id){
                this.id = question.id;
            }
            if(question.statement){
                this.statement = question.statement;
            }
            if(question.options && question.options.length > 0){
                this.options = this.setOptions(question.options);
            }
        }
    }
    setOptions(options:Options[]){
        let items = [];
        options.forEach((option)=>{
            items.push(new Options(option));
        });
        return items;
    }
}