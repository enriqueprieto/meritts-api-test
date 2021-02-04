import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exams } from "src/entity/exams";
import { ExamsController } from "./exams.controller";
import { ExamsService } from "./exams.service";


@Module({
    imports: [TypeOrmModule.forFeature([Exams])],
    providers: [ExamsService],
    controllers: [ExamsController]    
})
export class ExamsModule{}