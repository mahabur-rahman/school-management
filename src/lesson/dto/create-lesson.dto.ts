import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Course } from '../../courses/schemas/course.schema';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsNumber()
  @IsNotEmpty()
  seqNo: number;

  @IsEmpty({ message: `You can't pass course id!` })
  course: Course;
}
