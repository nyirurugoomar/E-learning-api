import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLectureDto {
    @IsNotEmpty()
    @IsString()
    course: string; 

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description:'The name of lecture',
        example: 'Johb'
    })
    lectureName: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        description:'more about lecture',
        example: 'Bachelor in computer science'
    })
    description?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        description:'Sources of information',
        example: 'www.google.com'
    })
    materialUrl?: string;
}
