import { Controller,Get,Post,Body, Param,Put, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';

@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService){}


    @Get()
    async getAllCourses(): Promise<Course[]>{
        return await this.courseService.getAllCourses();
    }

    @Post()
    async createCourse(
        @Body()
        course: Course,
        ): Promise<{ message: string; course: Course }>{
            return await this.courseService.createCourse(course);
        }


      @Get(':id')
        async getCourse(
            @Param('id')
            id:string,
        ): Promise<Course>{
            return await this.courseService.getCourseById(id);
        }


        @Put(':id')
        async updateCourse(
            @Param('id')
            id:string,
            @Body()
            course: Course,
        ): Promise<{message:string; course:Course}>{
            return  this.courseService.updateCourseByID(id, course);
        }

        @Delete(':id')
        async deleteCourse(
            @Param('id')
            id: string,
        ): Promise<any>{
            return await this.courseService.deleteCourseById(id);
        }
      }  

