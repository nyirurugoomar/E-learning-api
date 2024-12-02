import { Module } from '@nestjs/common';
import { LectureController } from './lecture.controller';
import { LectureService } from './lecture.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LectureSchema } from './schemas/lecture.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Lecture',schema:LectureSchema}])],
  controllers: [LectureController],
  providers: [LectureService]
})
export class LectureModule {}
