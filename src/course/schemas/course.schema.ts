import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Lecture } from "../../lecture/schemas/lecture.schema";
import { ApiProperty } from "@nestjs/swagger";


@Schema({
    timestamps: true,
})

export class Course{
    @Prop()
    @ApiProperty({
        description:'The Course name',
        example:'Money Policy'
    })
    courseName:string;

    @Prop()
    @ApiProperty({
        description:'The course description',
        example:'All about money policy'
    })
    description:string;

    @Prop()
    @ApiProperty({
        description:'The Duration of course',
        example:'5 days'
    })
    duration:number;

    @Prop()
    @ApiProperty({
        description:'The price of course',
        example:'$2000'
    })
    price:number;


    @ApiProperty({})
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }] })
  lectures: mongoose.Types.ObjectId[];


}

export const CourseSchema = SchemaFactory.createForClass(Course)