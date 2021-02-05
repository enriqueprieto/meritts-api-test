import { Exam } from 'src/types/exam';
import { ExamType } from 'src/types/exam-type';
import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { Questions } from './questions';

@Entity()
export class Exams implements Exam{
    @ObjectIdColumn({
        generated: 'uuid',
        primary: true
    })
    id:ObjectID;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    type: ExamType;
    @Column(() => Questions)
    questions:Questions[];
    constructor(model?:Exams){
        if(model){
            if(model.id){
                this.id = model.id;
            }
            if(model.name){
                this.name = model.name;
            }
            if(model.description){
                this.description = model.description;
            }
            if(model.type){
                this.type = model.type;
            }
            if(model.questions && model.questions.length > 0){
                this.questions = this.setQuestions(model.questions);
            }else{
                this.questions = [];
            }
        }
    }
    setQuestions(questions:Questions[]):Questions[]{
        let items = [];
        questions.forEach((question)=>{
            items.push(new Questions(question));
        });
        return items;
    }
    async getQuestion(questionId:string):Promise<Questions>{
        if(!this.questions || this.questions && this.questions.length == 0){
            throw new Error('Questão não encontrada nesta prova.');
        }
        let items = this.questions.filter((question)=>{
            return question.id == questionId;
        });
        if(items.length == 0){
            throw new Error('Questão não encontrada nesta prova.');
        }
        return items[0];
    }
    async getQuestionAndIndex(questionId:string):Promise<{question:Questions, index:number}>{
        let question = await this.getQuestion(questionId),
            index = this.questions.findIndex((item)=>{
                return item.id = questionId;
            });
        return { question, index };
    }
}