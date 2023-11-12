import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, Course } from './schemas/course.schema';
import mongoose from 'mongoose';
import { UpdateCourseDto } from './dto/update-course.dto';

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
  async findAll(promo?: boolean, category?: Category): Promise<Course[]> {
    const query: any = {};

    if (promo !== undefined) {
      query.promo = promo;
    }

    if (category) {
      query.category = category;
    }

    if (Object.keys(query).length === 0) {
      return this.courseModel.find().exec();
    }

    const courses = await this.courseModel.find(query).exec();
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
  async updateCourse(id: string, course: UpdateCourseDto): Promise<Course> {
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
