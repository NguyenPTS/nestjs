import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'The title of the task' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ message: 'Title should be a string' })
  title: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @ApiProperty({ description: 'The description of the task' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @ApiProperty({ description: 'is completed of the task' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  completed: boolean;
}
