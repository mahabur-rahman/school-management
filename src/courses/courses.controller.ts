import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Category, Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // create course
  @Post()
  async createCourse(@Body() course: CreateCourseDto): Promise<Course> {
    return this.coursesService.createCourse(course);
  }

  // find all courses : localhost:3000/courses?promo=true&category=BEGGINER
  @Get()
  async findAll(
    @Query('promo') promo: boolean,
    @Query('category') category: Category,
  ): Promise<Course[]> {
    return this.coursesService.findAll(promo, category);
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
    course: UpdateCourseDto,
  ): Promise<Course> {
    return this.coursesService.updateCourse(id, course);
  }

  // delete course
  @Delete(':id')
  async deleteCourse(@Param('id') id: string): Promise<Course> {
    return this.coursesService.deleteCourse(id);
  }
}
