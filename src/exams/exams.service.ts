import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Exams } from "src/entity/exams";
import { Repository } from "typeorm";

@Injectable()
export class ExamsService{
    constructor(
        @InjectRepository(Exams)
        private examsRepository:Repository<Exams>
    ){}
    async exist(id:string):Promise<boolean>{
        let exam = await this.findOne(id);
        if(!exam){
            return false;
        }
        return true;
    }
    findAll():Promise<Exams[]>{
        return this.examsRepository.find();
    }
    findOne(id:string):Promise<Exams>{
        return this.examsRepository.findOne(id);
    }
    save(exam:Exams){
        return this.examsRepository.save(exam);
    }
    delete(id:string){
        return this.examsRepository.delete(id);
    }
}