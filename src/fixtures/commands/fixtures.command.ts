import { Command, CommandRunner } from 'nest-commander';
import { TasksService } from '../../tasks/tasks.service';

@Command({ name: 'fixtures', description: 'Load fixtures into the database' })
export class FixturesCommand extends CommandRunner {
  constructor(private readonly tasksService: TasksService) {
    super();
  }

  async run() {
    try {
      for (let i = 1; i <= 10; i++) {
        const task = await this.tasksService.create({
          name: `Task n°${i}`,
        });

        console.log('created: ', task.name);
      }
    } catch (error) {
      console.error('Error while creating fixtures: ', error);
    }
  }
}
