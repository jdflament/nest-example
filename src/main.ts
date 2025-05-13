import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestApplicationOptions, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function createApp(options?: NestApplicationOptions) {
  const app = await NestFactory.create(AppModule, options);

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  const config = new DocumentBuilder()
    .setTitle('Nest Exotec')
    .setDescription('This is our API documentation.')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  return app;
}

async function bootstrap() {
  const app = await createApp();

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<string>('port');

  await app.listen(port);
}
bootstrap();
