import { ApiProperty } from "@nestjs/swagger";


export class UpdateStudentDto {


    @ApiProperty({
        description:'Name of student'
    })
    readonly course:string;
    readonly lectureName: string;
    readonly description: string;
    readonly materialUrl: string;
}