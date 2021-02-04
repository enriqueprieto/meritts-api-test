import { Controller, Get, Param } from '@nestjs/common';
import { ExamsService } from './exams.service';

@Controller('exams')
export class ExamsController {
    constructor(private examsService:ExamsService){

    }
    @Get()
    async getAll(){
        let exams = await this.examsService.findAll();
        return { exams };
    }
    @Get(':id')
    async getOne(@Param() params){
        let exam = await this.examsService.findOne(params.id);
        if(!exam){
            return 'Exam not found';
        }
        return exam;
    }
}
