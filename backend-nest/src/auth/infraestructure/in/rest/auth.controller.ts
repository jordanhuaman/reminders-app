import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { Login } from 'src/auth/application/port/in/login';
import { Register } from 'src/auth/application/port/in/register';
import type { UserLoginI, UserRegisterI } from 'src/shared/@types/user';
import { createZodValidationPipe } from 'src/shared/zod';
import { registerUserSchema } from 'src/shared/zod/user.schema';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly loginUsecase: Login,
    private readonly registerUseCase: Register,
  ) {}

  @Post('/register')
  @UsePipes(createZodValidationPipe(registerUserSchema))
  async register(@Body() request: UserRegisterI): Promise<void> {
    const { email, password } = request;

    await this.registerUseCase.execute(email, password);
  }

  @Post('/login')
  async login(@Body() request: UserLoginI): Promise<string> {
    const { email, password } = request;
    return await this.loginUsecase.execute(email, password);
  }
}
