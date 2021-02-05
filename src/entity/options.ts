import { Option } from "src/types/option";
import { Entity, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Options implements Option{
    @Column()
    id:string;
    @Column()
    key: string;
    @Column()
    value: string;
    @Column({default: false})
    correct: boolean;
    constructor(option?:Options){
        if(option){
            if(option.id){
                this.id = option.id;
            }else{
                this.generateUUID();
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
        }else{
            this.generateUUID();
        }
    }
    generateUUID(){
        this.id = uuidv4();
    }
}