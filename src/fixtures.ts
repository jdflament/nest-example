import { CommandFactory } from 'nest-commander';
import { FixturesModule } from './fixtures/fixtures.module';

const bootstrap = async () => {
  await CommandFactory.run(FixturesModule, ['warn', 'error']);
};

bootstrap();
