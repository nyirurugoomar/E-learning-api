import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schemas/student.schema';
import mongoose from 'mongoose';

@Injectable()
export class StudentService {
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
        return student
    } 
}
