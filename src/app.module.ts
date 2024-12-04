import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { LectureModule } from './lecture/lecture.module';
import { AdminModule } from './admin/admin.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 5000,
        limit: 3,
      }
    ]),
    ConfigModule.forRoot({
       envFilePath:'.env',
       isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    StudentModule,
    CourseModule,
    LectureModule,
    AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
