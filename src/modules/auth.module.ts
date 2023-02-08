import { Module } from '@nestjs/common';
import { FacebookStrategy } from '@Services/auth/facebook.strategy';
import { AuthController } from '@App/controllers/auth.controller';
import { UserModule } from '@App/modules/user.module';
import { UserService } from '@Services/user/user.service';

@Module({
  imports: [UserModule],
  providers: [FacebookStrategy, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
