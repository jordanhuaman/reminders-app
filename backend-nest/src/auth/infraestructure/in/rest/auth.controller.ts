import { Body, Controller, Post } from '@nestjs/common';
import { Login } from 'src/auth/application/port/in/login';
import { Register } from 'src/auth/application/port/in/register';
import type { UserLoginI, UserRegisterI } from 'src/shared/@types/user';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly loginUsecase: Login,
    private readonly registerUseCase: Register,
  ) {}

  @Post('/register')
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
