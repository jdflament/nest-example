import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  findAll() {
    return this.tasksRepository.find();
  }

  async create({ name }: { name: string }) {
    const task = this.tasksRepository.create();
    task.name = name;

    return await this.tasksRepository.save(task);
  }
}
