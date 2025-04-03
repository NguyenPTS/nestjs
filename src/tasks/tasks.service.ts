import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto ';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  // Lấy tất cả task
  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  // Lấy một task theo id
  async findOne(id: number): Promise<Task> {
    try {
      return await this.taskRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  // Tạo mới task
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(newTask);
  }

  // Cập nhật task
  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const existingTask = await this.findOne(id);
    await this.taskRepository.update(id, updateTaskDto);
    return { ...existingTask, ...updateTaskDto };
  }

  // Xóa task
  async remove(id: number): Promise<void> {
    const task = await this.findOne(id);
    await this.taskRepository.delete(id);
  }
}
