import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import { UserService } from '@Services/user/user.service';
import { PassportStrategy } from '@nestjs/passport';
import FacebookTokenStrategy from 'passport-facebook-token';
import Logger from '@Logger/log';

@Injectable()
export class FacebookStrategy extends PassportStrategy(FacebookTokenStrategy, 'facebook-token') {
  constructor(private readonly userService: UserService) {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-types,max-params
  async validate(request: any, accessToken: string, refreshToken: string, profile: any, done: Function) {
    try {
      const user = await this.userService.findOrCreate(profile);
      return done(null, user);
    } catch (e: any) {
      Logger.error(e);
      return null;
    }
  }
}
