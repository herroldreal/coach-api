import { Module } from '@nestjs/common';
import { AppController } from '@App/app.controller';
import { AppService } from '@App/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
