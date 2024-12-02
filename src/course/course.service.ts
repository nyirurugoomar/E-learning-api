import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './schemas/course.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(Course.name)
        private courseModel: mongoose.Model<Course>
        
    ) {}

    async getAllCourses(): Promise<Course[]> {
        // Populate the lectures when fetching all courses
        return this.courseModel
            .find()
            .populate('lectures') // Populating lectures field
            .exec();
    }

    async createCourse(course:CreateCourseDto): Promise<{ message: string; course: Course }> {
        const createdCourse = await this.courseModel.create(course);
        return {
            message: 'Course created successfully!',
            course: createdCourse,
        };
    }

    async getCourseById(id: string): Promise<Course> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid ID format.');
        }
        const course = await this.courseModel
            .findById(id)
            .populate('lectures') // Populating lectures when fetching course by ID
            .exec();

        if (!course) {
            throw new NotFoundException('Course not found.');
        }

        return course;
    }

    async updateCourseByID(id: string, course: Course): Promise<{ message: string; course: Course }> {
        const updatedCourse = await this.courseModel.findByIdAndUpdate(id, course, {
            new: true,
            runValidators: true,
        });

        if (!updatedCourse) {
            throw new NotFoundException('Course not found.');
        }

        return {
            message: 'Course updated successfully!',
            course: updatedCourse,
        };
    }

    async deleteCourseById(id: string): Promise<any> {
        const deleteCourse = await this.courseModel.findByIdAndDelete(id);

        if (!deleteCourse) {
            throw new NotFoundException('Course not found.');
        }

        return {
            message: 'Course deleted successfully!',
            course: deleteCourse,
        };
    }
}
