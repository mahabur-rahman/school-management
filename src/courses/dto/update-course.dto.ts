import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Category } from '../schemas/course.schema';

export class UpdateCourseDto {
  @IsNumber()
  @IsOptional()
  seqNo: number;

  @IsString()
  @IsOptional()
  url: string;

  @IsString()
  @IsOptional()
  courseListIcon: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsOptional()
  @IsEnum(Category, { message: `Please enter correct category!` })
  category: Category;

  @IsNumber()
  @IsOptional()
  lessonsCount: number;

  @IsBoolean()
  @IsOptional()
  promo: boolean;
}
