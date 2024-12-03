import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";



@Schema({
    timestamps: true,
})

export class Student{


    @Prop()
    @ApiProperty({
        description:'The name of student',
        example: 'John'
    })
    name:string;


    @Prop()
    @ApiProperty({
        description:'The email of student',
        example: 'john@gmail.com'
    })
    email:string;


    @Prop()
    @ApiProperty({
        description:'The date of birth of student',
        example: '01/01/2020'
    })
    dateOfBirth:Date;


    @Prop()
    @ApiProperty({
        description:'The contact of student',
        example: '0784949484'
    })
    contact:string;
}

export const StudentSchema = SchemaFactory.createForClass(Student)
