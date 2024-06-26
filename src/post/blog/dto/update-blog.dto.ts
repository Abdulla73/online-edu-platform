import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    @IsNotEmpty()
    @IsString()
    answer: string;
}

