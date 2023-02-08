import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from '@App/modules/auth.module';
import { UserService } from '@Services/user/user.service';
import { FacebookStrategy } from '@Services/auth/facebook.strategy';
import { AuthController } from '@Controllers/auth.controller';

describe('AuthModule', () => {
  let authController: AuthController;
  let authModule: TestingModule;

  beforeEach(async () => {
    authModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    authController = authModule.get<AuthController>(AuthController);
  });

  it('should compile the module', async () => {
    expect(authController).toBeDefined();
    expect(authModule.get(UserService)).toBeInstanceOf(UserService);
  });
});
