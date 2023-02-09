import { Module } from '@nestjs/common';
import { FacebookStrategy } from '@Services/auth/facebook.strategy';
import { AuthController } from '@App/controllers/auth.controller';
import { UserModule } from '@App/modules/user.module';
import { UserService } from '@Services/user/user.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { Mapper } from '@Utils/mapper';

@Module({
  imports: [ConfigModule, PassportModule, UserModule],
  providers: [FacebookStrategy, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
