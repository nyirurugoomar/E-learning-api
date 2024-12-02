import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    ConfigModule.forRoot({
       envFilePath:'.env',
       isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    StudentModule,
    CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
