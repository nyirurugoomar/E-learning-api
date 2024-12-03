import { Controller,Get,Post,Body, Param,Put, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService){}


    @Get()
    @ApiOperation({summary:'Fetch list of courses'})
    @ApiResponse({
        status: 200,
        description: 'List of courses fetched successfully',
      })
      @ApiNotFoundResponse({description:'Fail to fetch list of courses'})
    async getAllCourses(): Promise<Course[]>{
        return await this.courseService.getAllCourses();
    }

    @Post()
    @ApiOperation({summary:'Create course'})
    @ApiResponse({
        status: 201,
        description: 'Course created successfully',
      })
      @ApiNotFoundResponse({description:'Fail to create of courses'})
    async createCourse(
        @Body()
        createCourse:CreateCourseDto
        ): Promise<{ message: string; course: Course }>{
            return await this.courseService.createCourse(createCourse);
        }
      @Get(':id')
      @ApiOperation({summary:'Get course by id'})
      @ApiResponse({
        status:201
      })
      @ApiNotFoundResponse({description:'Fail to get course by id'})
        async getCourse(
            @Param('id')
            id:string,
        ): Promise<Course>{
            return await this.courseService.getCourseById(id);
        }


        @Put(':id')
        @ApiOperation({summary:'Update course'})
        @ApiResponse({
            description:'Course updated successfully',
            status:201
        })
        @ApiOkResponse({
            type:UpdateCourseDto,
            isArray:true
        })
        @ApiNotFoundResponse({description:'Fail to update course'})
        async updateCourse(
            @Param('id')
            id:string,
            @Body()
            course: Course,
        ): Promise<{message:string; course:Course}>{
            return  this.courseService.updateCourseByID(id, course);
        }

        @Delete(':id')
        @ApiOperation({summary:'Delete course'})
        @ApiResponse({
            description:'Course deleted successfully',
            status:200
        })
        @ApiNotFoundResponse({description:'Fail to delete course'})
        async deleteCourse(
            @Param('id')
            id: string,
        ): Promise<any>{
            return await this.courseService.deleteCourseById(id);
        }
      }  

