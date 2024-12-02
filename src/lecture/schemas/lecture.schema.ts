import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import { Course } from "../../course/schemas/course.schema";
import mongoose from "mongoose";




@Schema({
    timestamps: true,
})

export class Lecture{

    @Prop()
    course: mongoose.Schema.Types.ObjectId;

    @Prop()
    lectureName:string;


    @Prop()
    description:string;

    @Prop()
    materialUrl:string;



}

export const LectureSchema = SchemaFactory.createForClass(Lecture)