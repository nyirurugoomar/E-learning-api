import { BadRequestException, Injectable } from '@nestjs/common';
import * as  mongoose from 'mongoose';
import { Lecture } from './schemas/lecture.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLectureDto } from './dto/create-lecture.dto';


@Injectable()
export class LectureService {
    [x: string]: any;
    constructor(
        @InjectModel(Lecture.name)
        private lectureModel: mongoose.Model<Lecture>,
        
    ){}

    async getAllLectures(): Promise<Lecture[]> {
        const lectures = await this.lectureModel.find()
        return lectures;
    }

    async createLecture(lecture: CreateLectureDto):Promise<{message:string; lecture:Lecture}>{
        const createdLecture = await this.lectureModel.create(lecture);
        return {
            message: 'Lecture created successfully!',
            lecture: createdLecture,
        };
    }
   
    // async createLecture(lectureDto: CreateLectureDto): Promise<{ message: string; lecture: Lecture }> {
        
    //     const createdLecture = await this.lectureModel.create({
    //         ...lectureDto,
    //         course: new mongoose.Types.ObjectId(lectureDto.course),
    //     });
    
    //     return {
    //         message: 'Lecture created successfully!',
    //         lecture: createdLecture,
    //     };
    // }

async getCourseById(id:string): Promise<Lecture>{
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ID format.');
    }
    const lecture = await this.lectureModel.findById(id)

    if(!lecture){
        throw new BadRequestException('Lecture not found.');
    }
    return lecture;
}

async updateLecture(id:string, lecture:Lecture): Promise<Lecture>{
    return this.lectureModel.findByIdAndUpdate(id, lecture,
        {
            new:true,
            runValidators:true
        })
}

async deleteLectureById(id:string): Promise<any>{
    const deleteLecture = await this.lectureModel.findByIdAndDelete(id)

    if(!deleteLecture){
        throw new BadRequestException('Lecture not found.');
    }
    return{
        message: 'Lecture deleted successfully!',
        lecture:deleteLecture,
    }
}

    



}
