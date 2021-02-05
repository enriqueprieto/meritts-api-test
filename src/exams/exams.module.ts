import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exams } from "src/entity/exams";
import { Options } from "src/entity/options";
import { Questions } from "src/entity/questions";
import { ExamsController } from "./exams.controller";
import { ExamsService } from "./exams.service";


@Module({
    imports: [TypeOrmModule.forFeature([Exams, Questions, Options])],
    providers: [ExamsService],
    controllers: [ExamsController]    
})
export class ExamsModule{}