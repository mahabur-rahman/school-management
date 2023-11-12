import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './schemas/lesson.schema';
import mongoose from 'mongoose';
import { Course } from 'src/courses/schemas/course.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private lessonModel: mongoose.Model<Lesson>,

    @InjectModel(Course.name)
    private courseModel: mongoose.Model<Course>,
  ) {}

  // creating lesson

  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const { description, duration, seqNo } = createLessonDto;

    // Create a new Course
    const newCourse = new this.courseModel();

    const newLesson = new this.lessonModel({
      description,
      duration,
      seqNo,
      course: newCourse._id,
    });

    const createdLesson = await newLesson.save();

    return createdLesson;
  }
}
