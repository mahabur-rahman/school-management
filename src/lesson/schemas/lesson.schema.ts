import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

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
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
