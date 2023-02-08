import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '@Controllers/auth.controller';
import { UserService } from '@Services/user/user.service';
import { createRequest, createResponse } from 'node-mocks-http';

describe('AppController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [UserService],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('Facebook', () => {
    it('should return "Facebook"', async () => {
      const req = createRequest();
      const result = await authController.getTokenAfterFacebookSignIn(req);
      expect(result).toBe('Facebook');
    });
  });
});
