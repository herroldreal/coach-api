import { Module } from '@nestjs/common';
import { UserService } from '@Services/user/user.service';
import { AuthController } from '@App/controllers/auth.controller';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [UserService],
})
export class AppModule {}
