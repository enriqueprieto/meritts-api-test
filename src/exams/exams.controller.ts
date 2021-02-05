import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Exams } from 'src/entity/exams';
import { ExamsService } from './exams.service';

@Controller('exams')
export class ExamsController {
    constructor(
        private examsService:ExamsService
    ){}
    @Get()
    async getAll(){
        try {
            let exams = await this.examsService.findAll();
            return {
                status: true,
                result: exams
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }   
        }
    }
    @Get(':id')
    async getOne(@Param() params){
        try {
            let exam = await this.examsService.findOne(params.id);
            if(!exam){
                throw new Error('Exam not found');
            }
            return{
                status: true,
                result: exam
            }
        } catch (error) {
            return {
                status: false,
                result: error.message
            } 
        }
    }
    @Post()
    async store(@Body() body:Exams){
        try {
            if(!body.name || !body.description || !body.type){
                throw new Error('Falta parâmetro a serem enviados.')
            }
            let exam = await this.examsService.save(new Exams(body));
            if(!exam){
                throw new Error('Ocorreu um erro ao salvar a prova.');
            }
            return { 
                status: true,
                result: exam 
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            };
        }
    }
    @Put(':id')
    async update(@Param() params, @Body() body:Exams){
        try {
            let exam = await this.examsService.findOne(params.id);
            if(!exam){
                throw new Error('Prova não encontrada');
            }
            if(body.name != exam.name){
                exam.name = body.name;
            }
            if(body.description != exam.description){
                exam.description = body.description;
            }
            if(body.type != exam.type){
                exam.type = body.type;
            }
            exam = await this.examsService.save(exam);
            return { 
                status: true,
                result: exam 
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            };
        }
    }
    @Delete(':id')
    async delete(@Param() params){
        try {
            let exam = await this.examsService.findOne(params.id);
            if(!exam){
                throw new Error('Prova não encontrada');
            }
            await this.examsService.delete(exam.id.toString());
            return { 
                status: true,
                result: 'Deletado com sucesso.'
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            };
        }
    }
}
