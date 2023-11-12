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

  async findAll(
    description?: string,
    seqNo?: number,
    courseId?: string,
  ): Promise<Lesson[]> {
    // Build the query object based on provided parameters
    const query: any = {};
    if (description) {
      query.description = description;
    }
    if (seqNo) {
      query.seqNo = seqNo;
    }
    if (courseId) {
      query.course = courseId;
    }

    // If no filters are provided, return all lessons
    if (Object.keys(query).length === 0) {
      return this.lessonModel.find().exec();
    }

    // Query the database using Mongoose with filters
    const lessons = await this.lessonModel.find(query).exec();
    return lessons;
  }
}
