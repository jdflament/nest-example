import { Module } from '@nestjs/common';
import { FixturesCommand } from './commands/fixtures.command';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('orm'),
      inject: [ConfigService],
    }),
    TasksModule,
  ],
  providers: [FixturesCommand],
})
export class FixturesModule {}
