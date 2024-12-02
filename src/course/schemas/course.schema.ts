import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


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
}

export const CourseSchema = SchemaFactory.createForClass(Course)