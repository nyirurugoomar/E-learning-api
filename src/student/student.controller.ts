import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './schemas/student.schema';
import { CreatedStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('students')
export class StudentController {
    constructor(private studentService: StudentService ){}

    @Get()
    @ApiOperation({summary:'Fetch list of student'})
    @ApiResponse({
        status: 200,
        description: 'List of student fetched successfully',
      })
      @ApiNotFoundResponse({ description: 'Fail to fetch list of student' })
    async getAllStudents(): Promise<Student[]>{
        return await this.studentService.getAllStudents();
    }

    @Post()
    @ApiOperation({ summary: 'Create student' })
      @ApiOkResponse({
        description: 'Student created successfully',
        type: CreatedStudentDto,
        isArray: true,
      })
      @ApiNotFoundResponse({description:'Fail to create student'})
    async createStudent(
        @Body()
        student: CreatedStudentDto,
        ): Promise<Student>{
        return await this.studentService.createStudent(student);
    }

    @Get(':id')
    @ApiOperation({summary:'Get student by Id'})
    @ApiOkResponse({
        description:'Fetched successfully'
    })
    @ApiNotFoundResponse({description:'Wrong student Id'})
    async getStudent(
        @Param('id')
        id:string
    ): Promise<Student>{
        return await this.studentService.getStudentById(id);
    }
    @Put(':id')
    @ApiOperation({summary:'Update student'})
    @ApiOkResponse({
        description:'Student updated successfully',
        type:UpdateStudentDto,
        isArray:true
    })
    @ApiNotFoundResponse({description:'Fail to update student'})
    async updateStudent(
        @Param('id')
        id:string,
        @Body()
        student:UpdateStudentDto
    ): Promise<Student>{
        return this.studentService.updateStudentById(id,student);
    }


    @Delete(':id')
    @ApiOperation({summary:'Delete student'})
    @ApiOkResponse({
        description:"Student deleted successfully"
    })
    @ApiNotFoundResponse({description:'Fail to delete student'})
    async deleteStudent(
        @Param('id')
        id: string,
      ): Promise<Student> {
        return this.studentService.deleteStudentById(id);
      }

}
