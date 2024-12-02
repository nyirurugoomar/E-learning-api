import { Controller,Get,Post,Body, Param } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { Lecture } from './schemas/lecture.schema';
import { CreateLectureDto } from './dto/create-lecture.dto';

@Controller('lecture')
export class LectureController {
    constructor(private lectureService:LectureService){}


@Get()
async getAllLectures(): Promise<Lecture[]>{
    return await this.lectureService.getAllLectures();
}


@Post()
    async createLecture(@Body() createLectureDto: CreateLectureDto) {
        return this.lectureService.createLecture(createLectureDto);
    }


 @Get(':id')
 async getLecture(@Param('id') id:string): Promise<Lecture>{
    return await this.lectureService.getCourseById(id);
 }   
}
