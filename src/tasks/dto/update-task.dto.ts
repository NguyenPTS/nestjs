import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty({ description: 'The title of the task' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'The description of the task' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Is completed of the task' })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
