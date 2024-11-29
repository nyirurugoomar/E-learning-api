import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true,
})

export class Student{


    @Prop()
    name:string;


    @Prop()
    email:string;


    @Prop()
    dateOfBirth:Date;


    @Prop()
    contact:string;
}

export const StudentSchema = SchemaFactory.createForClass(Student)
