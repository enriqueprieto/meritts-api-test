import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exams } from "src/entity/exams";
import { ExamsModule } from "src/exams/exams.module";
import { ExamsService } from "src/exams/exams.service";
import { QuestionsController } from "./questions.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature([Exams]),
        ExamsModule
    ],
    providers: [ExamsService],
    controllers: [QuestionsController]    
})
export class QuestionsModule{}