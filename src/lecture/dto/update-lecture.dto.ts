import { ApiProperty } from "@nestjs/swagger";


export class UpdateStudentDto {


    @ApiProperty({
        description:'Name of course',
        example:'Business '
    })
    readonly course:string;

    @ApiProperty({
        description:'The name of lecture',
        example: 'Johb'
    })
    readonly lectureName: string;

    @ApiProperty({
        description:'more about lecture',
        example: 'Bachelor in computer science'
    })
    readonly description: string;

    @ApiProperty({
        description:'Sources of information',
        example: 'www.google.com'
    })
    readonly materialUrl: string;
}