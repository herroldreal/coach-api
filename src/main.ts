import { NestFactory } from '@nestjs/core';
import { AppModule } from '@App/app.module';
import helmet from 'helmet';
import Logger from '@App/utils/logger/log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  await app.listen(3000);
}
bootstrap()
  .then(() => Logger.log('Server started'))
  .catch(Logger.error);
