import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Options } from 'src/entity/options';
import { Questions } from 'src/entity/questions';
import { ExamsService } from 'src/exams/exams.service';

@Controller('exams/:examId/questions')
export class QuestionsController {
    constructor(
        private examsService:ExamsService
    ){}
    @Get()
    async getAll(@Param() params){
        try {
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }
            return {
                status: true,
                result: exam.questions
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
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }
            let questions = exam.questions.filter((question)=>{
                return question.id == params.id;
            });
            if(questions.length == 0){
                throw new Error('Questão não encontrada nesta prova.');
            }
            let question = questions[0];
            return {
                status: true,
                result: question
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }   
        }
    }
    @Post()
    async store(@Param() params, @Body() body:Questions){
        try {
            if(!body.statement){
                throw new Error('Falta parâmetro a serem enviados.');
            }
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }            
            exam.questions.push(new Questions(body));
            exam = await this.examsService.save(exam);
            return {
                status: true,
                result: exam
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }
        }
    } 
    @Put(':id')
    async update(@Param() params, @Body() body:Questions){
        try {
            if(!body.statement){
                throw new Error('Falta parâmetro a serem enviados.');
            }
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }     
            let questions = exam.questions.filter((question)=>{
                return question.id == params.id;
            });
            if(questions.length == 0){
                throw new Error('Questão não encontrada nesta prova.');
            }      
            let question = questions[0];
            let questionIndex = exam.questions.findIndex((item)=>{
                return item.id == params.id;
            });
            if(question.statement != body.statement) {
                question.statement = body.statement;
            }
            exam.questions[questionIndex] = question;
            exam = await this.examsService.save(exam);
            return {
                status: true,
                result: exam
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }
        }
    } 
    @Delete(':id')
    async delete(@Param() params){
        try {
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }     
            let questions = exam.questions.filter((question)=>{
                return question.id == params.id;
            });
            if(questions.length == 0){
                throw new Error('Questão não encontrada nesta prova.');
            }      
            let questionIndex = exam.questions.findIndex((item)=>{
                return item.id == params.id;
            });
            exam.questions.splice(questionIndex, 1);
            exam = await this.examsService.save(exam);
            return {
                status: true,
                result: exam
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }
        }
    } 
    @Post(':id/options')
    async storeOption(@Param() params, @Body() body:Options){
        try {
            if(!body.key || !body.value){
                throw new Error('Falta parâmetro a serem enviados.');
            }
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }
            let questions = exam.questions.filter((question)=>{
                return question.id == params.id;
            });
            if(questions.length == 0){
                throw new Error('Questão não encontrada nesta prova.');
            }
            let question = questions[0];
            let questionIndex = exam.questions.findIndex((question)=>{
                return question.id == params.id;
            });
            question.options.push(new Options(body));
            exam.questions[questionIndex] = question;
            exam = await this.examsService.save(exam);
            return {
                status: true,
                result: exam
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }
        }
    } 
    @Put(':id/options/:optionId')
    async updateOption(@Param() params, @Body() body:Options){
        try {
            if(!body.key || !body.value || !body.correct == null){
                throw new Error('Falta parâmetro a serem enviados.');
            }
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }     
            let questions = exam.questions.filter((question)=>{
                return question.id == params.id;
            });
            if(questions.length == 0){
                throw new Error('Questão não encontrada nesta prova.');
            }      
            let question = questions[0];
            let questionIndex = exam.questions.findIndex((item)=>{
                return item.id == params.id;
            });
            let options = question.options.filter((item)=>{
                return item.id == params.optionId
            });
            if(options.length == 0){
                throw new Error('Opção não encontrada na questão desta prova.');
            } 
            let option = options[0];
            let optionIndex = question.options.findIndex((item)=>{
                return item.id == params.optionId
            });
            if(option.key != body.key){
                option.key = body.key;
            }
            if(option.value != body.value){
                option.value = body.value;
            }
            if(option.correct != body.correct){
                option.correct = body.correct;
            }
            question.options[optionIndex] = option;
            exam.questions[questionIndex] = question;
            exam = await this.examsService.save(exam);
            return {
                status: true,
                result: exam
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }
        }
    } 
    @Delete(':id/options/:optionId')
    async deleteOption(@Param() params){
        try {
            let exam = await this.examsService.findOne(params.examId);
            if(!exam){
                throw new Error('Prova não encontrada.');
            }     
            let questions = exam.questions.filter((question)=>{
                return question.id == params.id;
            });
            if(questions.length == 0){
                throw new Error('Questão não encontrada nesta prova.');
            }      
            let question = questions[0];
            let questionIndex = exam.questions.findIndex((item)=>{
                return item.id == params.id;
            });
            let options = question.options.filter((item)=>{
                return item.id == params.optionId
            });
            if(options.length == 0){
                throw new Error('Opção não encontrada na questão desta prova.');
            }   
            let optionIndex = question.options.findIndex((item)=>{
                return item.id == params.optionId
            });

            question.options.splice(optionIndex, 1);

            exam.questions[questionIndex] = question;
            exam = await this.examsService.save(exam);
            return {
                status: true,
                result: exam
            };
        } catch (error) {
            return {
                status: false,
                result: error.message
            }
        }
    } 
}
