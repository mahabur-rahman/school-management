import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { Lesson } from './schemas/lesson.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  // create a lesson
  @Post()
  async createLesson(
    @Body()
    lesson: CreateLessonDto,
  ): Promise<Lesson> {
    return await this.lessonService.createLesson(lesson);
  }

  // get all lesson
  @Get()
  async findAll(
    @Query('description') description?: string,
    @Query('seqNo') seqNo?: number,
    @Query('courseId') courseId?: string,
  ): Promise<Lesson[]> {
    return this.lessonService.findAll(description, seqNo, courseId);
  }
}
