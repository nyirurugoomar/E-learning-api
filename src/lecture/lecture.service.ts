import { BadRequestException, Injectable } from '@nestjs/common';
import * as  mongoose from 'mongoose';
import { Lecture } from './schemas/lecture.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLectureDto } from './dto/create-lecture.dto';


@Injectable()
export class LectureService {
    constructor(
        @InjectModel(Lecture.name)
        private courseModel: mongoose.Model<Lecture>,
        
    ){}

    async getAllLectures(): Promise<Lecture[]> {
        const lectures = await this.courseModel.find()
        return lectures;
    }
   
    async createLecture(lectureDto: CreateLectureDto): Promise<{ message: string; lecture: Lecture }> {
        // Validate if the course exists
        const courseExists = await this.courseModel.db.collection('courses').findOne({
            _id: new mongoose.Types.ObjectId(lectureDto.course),
        });
    
        if (!courseExists) {
            throw new Error('Course not found');
        }
    
        const createdLecture = await this.courseModel.create({
            ...lectureDto,
            course: new mongoose.Types.ObjectId(lectureDto.course),
        });
    
        return {
            message: 'Lecture created successfully!',
            lecture: createdLecture,
        };
    }

async getCourseById(id:string): Promise<Lecture>{
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ID format.');
    }
    const lecture = await this.courseModel.findById(id)

    if(!lecture){
        throw new BadRequestException('Lecture not found.');
    }
    return lecture;
}

    



}
