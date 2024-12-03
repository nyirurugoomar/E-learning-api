import { Controller,Get,Post,Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { Lecture } from './schemas/lecture.schema';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { ApiBearerAuth, ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateStudentDto } from './dto/update-lecture.dto';
import { AuthGuard } from '../admin/guard/auth.guard';

@ApiBearerAuth()
@Controller('lecture')
@UseGuards(AuthGuard)
export class LectureController {
    constructor(private lectureService:LectureService){}


@Get()
    @ApiOperation({summary:'Fetch list of lectures'})
    @ApiResponse({
        description:'List of lecture fetched successfully',
        status:200,
        type:Lecture,
        isArray:true
    })
    @ApiNotFoundResponse({description: 'Fail to fetch lecture'})
async getAllLectures(): Promise<Lecture[]>{
    return await this.lectureService.getAllLectures();
}


@Post()
    @ApiOperation({summary:'Create lecture'})
    @ApiResponse({
        description:'Lecture created successfully',
        status:201,
        type:CreateLectureDto,
        isArray:true
    })
    @ApiNotFoundResponse({description: 'Fail to create lecture'})
    async createLecture(@Body() createLectureDto: CreateLectureDto) {
        return this.lectureService.createLecture(createLectureDto);
    }


 @Get(':id')
 @ApiOperation({summary:'Get lecture by id'})
 @ApiResponse({description:'Successfully get lecture'})
 @ApiNotFoundResponse({description: 'Fail to get lecture'})
 async getLecture(@Param('id') id:string): Promise<Lecture>{
    return await this.lectureService.getCourseById(id);
 }   

 @Put(':id')
 @ApiOperation({summary:'Update lecture'})
 @ApiResponse({description:'Successfully update lecture'})
 @ApiNotFoundResponse({
    description: 'Fail to update lecture',
    type:UpdateStudentDto,
    isArray: true,
})
 async updateLecture(@Param('id') id:string, @Body() lecture:Lecture): Promise<Lecture>{
    return await this.lectureService.updateLecture(id, lecture);
 }

 @Delete(':id')
 @ApiOperation({summary:'Delete lecture'})
 @ApiResponse({description:'Successfully delete lecture'})
 @ApiNotFoundResponse({description: 'Fail to delete lecture'})
 async deleteLecture(@Param('id') id: string): Promise<any>{
    return await this.lectureService.deleteLectureById(id);
 }
}
