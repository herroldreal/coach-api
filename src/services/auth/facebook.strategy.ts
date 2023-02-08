import { Injectable } from '@nestjs/common';
import { UserService } from '@Services/user/user.service';
import { PassportStrategy } from '@nestjs/passport';
import FacebookTokenStrategy from 'passport-facebook-token';
import Logger from '@Logger/log';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(FacebookTokenStrategy, 'facebook-token') {
  constructor(private readonly userService: UserService, private readonly config: ConfigService) {
    super({
      clientID: config.get('facebook.id'),
      clientSecret: config.get('facebook.secret'),
      fbGraphVersion: 'v16.0',
      profileFields: ['id', 'emails', 'gender', 'first_name', 'last_name', 'middle_name', 'picture'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const user = await this.userService.findOrCreate(profile);
    Logger.log(`User => ${JSON.stringify(user, null, 2)} `);
    return user;
  }
}
