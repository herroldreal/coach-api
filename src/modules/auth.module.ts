import { Module } from '@nestjs/common';
import { FacebookStrategy } from '@Services/auth/facebook.strategy';
import { AuthController } from '@App/controllers/auth.controller';
import { UserModule } from '@App/modules/user.module';

@Module({
  imports: [UserModule],
  providers: [FacebookStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
