import { Exam } from 'src/types/exam';
import { ExamType } from 'src/types/exam-type';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ObjectIdColumn, ObjectID } from 'typeorm';
import { Questions } from './questions';

@Entity()
export class Exams implements Exam{
    @ObjectIdColumn({
        generated: "uuid",
        primary: true
    })
    id:ObjectID;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    type: ExamType;
    @ManyToMany(() => Questions, question => question.exams)
    @JoinTable()
    questions:Questions[];
    constructor(exam?:Exams){
        if(exam){
            if(exam.id){
                this.id = exam.id;
            }
            if(exam.name){
                this.name = exam.name;
            }
            if(exam.description){
                this.description = exam.description;
            }
            if(exam.type){
                this.type = exam.type;
            }
            if(exam.questions && exam.questions.length > 0){
                this.questions = this.setQuestions(exam.questions);
            }else{
                this.questions = [];
            }
        }
    }
    setQuestions(questions:Questions[]){
        let items = [];
        questions.forEach((question)=>{
            items.push(new Questions(question));
        });
        return items;
    }
}