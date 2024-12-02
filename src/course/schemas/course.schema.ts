import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Lecture } from "../../lecture/schemas/lecture.schema";


@Schema({
    timestamps: true,
})

export class Course{
    @Prop()
    courseName:string;

    @Prop()
    description:string;

    @Prop()
    duration:number;

    @Prop()
    price:number;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }])
    lectures: Lecture[];


}

export const CourseSchema = SchemaFactory.createForClass(Course)