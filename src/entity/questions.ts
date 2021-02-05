import { Question } from 'src/types/question';
import { Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable, ManyToOne, ObjectIdColumn, ObjectID } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Options } from './options';
export class Questions implements Question{
    @Column()
    id:string;
    @Column()
    statement: string;
    @Column(()=>Options)
    options: Options[];
    constructor(question?:Questions){
        if(question){
            if(question.id){
                this.id = question.id;
            }else{
                this.generateUUID();
            }
            if(question.statement){
                this.statement = question.statement;
            }
            if(question.options && question.options.length > 0){
                this.options = this.setOptions(question.options);
            }else{
                this.options = [];
            }
        }else{
            this.generateUUID();
        }
    }
    generateUUID(){
        this.id = uuidv4();
    }
    setOptions(options:Options[]):Options[]{
        let items = [];
        options.forEach((option)=>{
            items.push(new Options(option));
        });
        return items;
    }
    shuffleOptions(){
        let array = this.options;
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.options = array;
        return this;
    }
}