import { NestFactory } from '@nestjs/core';
import { AppModule } from '@App/app.module';
import helmet from 'helmet';
import Logger from '@App/utils/logger/log';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { VersioningType } from '@nestjs/common';
import * as compression from 'compression';
import * as Sentry from '@sentry/node';
import { SentryService } from '@ntegral/nestjs-sentry';
import { version } from '../package.json';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.useLogger(SentryService.SentryServiceInstance());
  app.use(helmet());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(compression());
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Coach API')
    .setDescription('The API implementation for Coach application based on GPT-3 and CNN ML')
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap()
  .then(() => Logger.log('Server started'))
  .catch(Logger.error);
