import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { Course } from "../../course/schemas/course.schema";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";




@Schema({
    timestamps: true,
})

export class Lecture{

    @Prop()
    course: mongoose.Schema.Types.ObjectId;

    @Prop()
    @ApiProperty({
        description:'The name of lecture',
        example: 'Johb'
    })
    lectureName:string;


    @Prop()
    @ApiProperty({
        description:'more about lecture',
        example: 'Bachelor in computer science'
    })
    description:string;

    @Prop()
    @ApiProperty({
        description:'Sources of information',
        example: 'www.google.com'
    })
    materialUrl:string;



}

export const LectureSchema = SchemaFactory.createForClass(Lecture)