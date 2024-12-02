import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLectureDto {
    @IsNotEmpty()
    @IsString()
    course: string; // ObjectId as string

    @IsNotEmpty()
    @IsString()
    lectureName: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    materialUrl?: string;
}
