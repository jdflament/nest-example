import configuration from './config/configuration';
import { DataSource, DataSourceOptions } from 'typeorm';

import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

export const connectionSource = new DataSource({
  ...(configuration().orm as DataSourceOptions),
  entities: ['./src/**/*.entity.ts'],
  migrations: ['./migrations/**/*.ts'],
  migrationsTableName: 'migrations',
});
