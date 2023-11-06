import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

export enum Category {
  BEGGINER = 'BEGGINER',
  ADVANCE = 'ADVANCE',
}

@Schema({
  timestamps: true,
})
export class Course {
  @Prop()
  seqNo: number;

  @Prop()
  url: string;

  @Prop()
  courseListIcon: string;

  @Prop()
  description: string;

  @Prop()
  longDescription: string;

  @Prop()
  category: Category;

  @Prop()
  lessonsCount: number;

  @Prop()
  promo: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
