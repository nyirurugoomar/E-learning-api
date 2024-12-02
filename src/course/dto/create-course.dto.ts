import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';


export class CreateCourseDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description:'The Course name',
        example:'Money Policy'
    })
    courseName: string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description:'The course description',
        example:'All about money policy'
    })
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description:'The Duration of course',
        example:'5 days'
    })
    duration: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description:'The price of course',
        example:'$2000'
    })
    price: number;

    @IsNotEmpty()
    @IsString()
    lectures: string;

}