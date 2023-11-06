import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import mongoose from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: mongoose.Model<Course>,
  ) {}
  // create course
  async createCourse(course): Promise<Course> {
    const newCourse = await this.courseModel.create(course);

    return newCourse;
  }

  // find all courses
  async findAll(): Promise<Course[]> {
    const courses = await this.courseModel.find();
    return courses;
  }

  // get single course
  async getSingleCourse(id: string): Promise<Course> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) throw new BadRequestException('Please enter correct id!');

    const course = await this.courseModel.findById(id);

    if (!course) throw new BadRequestException('course not found!');

    return course;
  }

  // update course
  async updateCourse(id: string, course): Promise<Course> {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) throw new BadRequestException('Please enter correct id!');

    const isCourseExist = await this.courseModel.findById(id);

    if (!isCourseExist) throw new BadRequestException('course not found!');

    return this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
    });
  }

  //   delete course
  async deleteCourse(id: string): Promise<Course> {
    return await this.courseModel.findByIdAndDelete(id);
  }
}
