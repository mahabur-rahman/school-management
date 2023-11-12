import mongoose from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Course } from '../../courses/schemas/course.schema';
@Schema({
  timestamps: true,
})
export class Lesson {
  @Prop()
  description: string;

  @Prop()
  duration: string;

  @Prop()
  seqNo: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  course: Course;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
