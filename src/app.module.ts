import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsModule } from './exams/exams.module';
import configuration from './config/configuration';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configuration.getDatabase()),
    ExamsModule,
    QuestionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
