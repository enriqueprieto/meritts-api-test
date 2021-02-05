import { Option } from "src/types/option";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Questions } from "./questions";

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
    @ManyToOne(() => Questions, question => question.options)
    question:Questions;
    constructor(option?:Options){
        if(option){
            if(option.id){
                this.id = option.id;
            }
            if(option.key){
                this.key = option.key;
            }
            if(option.value){
                this.value = option.value;
            }
            if(typeof option.correct == 'boolean'){
                this.correct = option.correct;
            }
        }
    }
}