import { Module } from '@nestjs/common';
import { AuthModule } from '@App/modules/auth.module';
import { UserModule } from '@App/modules/user.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '@App/config/configuration';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
})
export class AppModule {}
