import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string; // Password will be hashed.

  @Prop({ default: 'admin' })
  role: string; // Set default role as 'admin'.
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
