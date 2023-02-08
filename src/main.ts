import { NestFactory } from '@nestjs/core';
import { AppModule } from '@App/app.module';
import helmet from 'helmet';
import Logger from '@App/utils/logger/log';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { VersioningType } from '@nestjs/common';
import { version } from '../package.json';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Coach API')
    .setDescription('The API implementation for Coach application based on GPT-3 and CNN ML')
    .setVersion(version)
    .addTag('coach-ml', 'The Coach ML API')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap()
  .then(() => Logger.log('Server started'))
  .catch(Logger.error);
