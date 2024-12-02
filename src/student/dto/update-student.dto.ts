import { ApiProperty } from "@nestjs/swagger";



export class UpdateStudentDto{


    @ApiProperty({
        description:'The name of student',
        example: 'John'
    })
    readonly name: string;

    @ApiProperty({
        description:'The email of student',
        example: 'john@gmail.com'
    })
    readonly email: string;

    @ApiProperty({
        description:'The date of birth of student',
        example: '01/01/2020'
    })
    readonly dateOfBirth: Date;

    @ApiProperty({
        description:'The contact of student',
        example: '0784949484'
    })
    readonly contact: string;
}