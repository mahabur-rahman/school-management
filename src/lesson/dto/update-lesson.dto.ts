import { IsEmpty, IsOptional, IsNumber, IsString } from 'class-validator';
import { Course } from '../../courses/schemas/course.schema';

export class UpdateLessonDto {
  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  duration: string;

  @IsNumber()
  @IsOptional()
  seqNo: number;

  @IsEmpty({ message: `You can't pass course id!` })
  courseId: Course;
}
