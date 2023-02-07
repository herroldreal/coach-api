import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import FacebookTokenStrategy from 'passport-facebook-token';
import { UserService } from '@Services/user/user.service';

@Injectable()
export class FacebookStrategy {
  constructor(private readonly userService: UserService) {
    this.init();
  }

  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          fbGraphVersion: 'v16.0',
        },
        // eslint-disable-next-line max-params
        async (accessToken: string, refreshToken: string, profile: any, done: any) => {
          const user = await this.userService.findOrCreate(profile);
          return done(null, user);
        },
      ),
    );
  }
}
