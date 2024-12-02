import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatedStudentDto{
    @ApiProperty({
        description:'The name of student',
        example: 'John'
    })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({
        description:'The email of student',
        example: 'john@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({
        description:'The date of birth of student',
        example: '01/01/2020'
    })
    @IsNotEmpty()
    @IsNumber()
    readonly dateOfBirth: Date;

    @ApiProperty({
        description:'The contact of student',
        example: '0784949484'
    })
    @IsNotEmpty()
    @IsNumber()
    readonly contact: string;
}