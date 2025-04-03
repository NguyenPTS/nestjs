import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  // Bạn có thể thêm các phương thức tùy chỉnh vào đây nếu cần
  async findByTitle(title: string): Promise<Task[]> {
    return this.find({ where: { title } });
  }
}
