import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schemas/student.schema';
import mongoose from 'mongoose';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
    updateById(id: string, student: UpdateStudentDto): Student | PromiseLike<Student> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(Student.name)
        private studentModel:mongoose.Model<Student>
    ){}


    async getAllStudents(): Promise<Student[]> {
        const students = await this.studentModel.find()
        return students;
    }

    async createStudent(student: Student): Promise<Student> {
        const createdStudent = await this.studentModel.create(student)
        return createdStudent
    } 

    async getStudentById(id: string): Promise<Student> {
        const student = await this.studentModel.findById(id)
        
        if(!student){
            throw new BadRequestException('Student not found.');
        }
        return student
    } 

    async updateStudentById(id: string,student:Student): Promise<Student> {
        return await this.studentModel.findByIdAndUpdate(id,student,
            {
                new:true,
                runValidators:true
            })
        
    } 


    async deleteStudentById(id: string): Promise<any> {
        return await this.studentModel.findByIdAndDelete(id)
    }

    

    
}
