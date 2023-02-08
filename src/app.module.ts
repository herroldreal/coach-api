import { Module } from '@nestjs/common';
import { UserService } from '@Services/user/user.service';
import { AuthController } from '@App/controllers/auth.controller';
import { AuthModule } from '@App/modules/auth.module';
import { UserModule } from '@App/modules/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AuthController],
  providers: [UserService],
})
export class AppModule {}
