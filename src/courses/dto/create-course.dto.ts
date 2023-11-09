import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Category } from '../schemas/course.schema';

export class CreateCourseDto {
  @IsNumber()
  @IsNotEmpty()
  seqNo: number;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  courseListIcon: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(Category, { message: `Please enter correct category!` })
  category: Category;

  @IsNumber()
  @IsNotEmpty()
  lessonsCount: number;

  @IsBoolean()
  @IsNotEmpty()
  promo: boolean;
}
