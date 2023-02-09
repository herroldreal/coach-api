import { Module } from '@nestjs/common';
import { AuthModule } from '@App/modules/auth.module';
import { UserModule } from '@App/modules/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '@App/config/configuration';
import { SentryModule } from '@ntegral/nestjs-sentry';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    SentryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cfg: ConfigService) => ({
        dsn: cfg.get('sentry.dsn'),
        debug: cfg.get('env') === 'development',
        environment: cfg.get('env'),
        release: cfg.get('version'),
        logLevels: ['debug', 'error', 'log', 'verbose', 'warn'],
        integrations: [new Sentry.Integrations.Http({ tracing: true }), new Tracing.Integrations.Express()],
        tracesSampleRate: 1.0,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
