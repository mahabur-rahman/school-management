import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { LessonSchema } from './schemas/lesson.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from '../courses/schemas/course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Lesson', schema: LessonSchema }]),
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
