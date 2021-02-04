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
    findAll():Promise<Exams[]>{
        return this.examsRepository.find();
    }
    findOne(id:string):Promise<Exams>{
        return this.examsRepository.findOne({
            where: {
                id: id
            }
        });
    }
}