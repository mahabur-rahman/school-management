import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './schemas/course.schema';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // create course
  @Post()
  async createCourse(@Body() course): Promise<Course> {
    return this.coursesService.createCourse(course);
  }

  // find all courses
  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  // get single course
  @Get(':id')
  async getSingleCourse(@Param('id') id: string): Promise<Course> {
    return this.coursesService.getSingleCourse(id);
  }

  // update course
  @Put(':id')
  async updateCourse(
    @Param('id') id: string,
    @Body()
    course,
  ): Promise<Course> {
    return this.coursesService.updateCourse(id, course);
  }

  // delete course
  @Delete(':id')
  async deleteCourse(@Param('id') id: string): Promise<Course> {
    return this.coursesService.deleteCourse(id);
  }
}
