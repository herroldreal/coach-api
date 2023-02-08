import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import Logger from '@Logger/log';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('facebook-token'))
  @Get('facebook')
  async getTokenAfterFacebookSignIn(@Req() req): Promise<string> {
    Logger.log(`Facebook SignIn -> ${req}`);
    return 'Facebook';
  }
}
