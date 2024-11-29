import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './schemas/student.schema';
import { createdStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentController {
    constructor(private studentService: StudentService ){}

    @Get()
    async getAllStudents(): Promise<Student[]>{
        return await this.studentService.getAllStudents();
    }

    @Post()
    async createStudent(
        @Body()
        student: createdStudentDto,
        ): Promise<Student>{
        return await this.studentService.createStudent(student);
    }

    @Get(':id')
    async getStudent(
        @Param('id')
        id:string
    ): Promise<Student>{
        return await this.studentService.getStudentById(id);
    }
}
