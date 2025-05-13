import { Controller, Get } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { ApiOkResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOkResponse({ type: [Task] })
  findAll() {
    return this.tasksService.findAll();
  }
}
