import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsModule } from './exams/exams.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configuration.getDatabase()),
    ExamsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
