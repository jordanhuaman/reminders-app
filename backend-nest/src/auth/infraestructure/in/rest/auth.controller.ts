import { Body, Controller, Get } from '@nestjs/common';
import { Login } from 'src/auth/application/port/in/login';
import type { UserLoginI } from 'src/shared/@types/user';

@Controller('/auth')
export class AuthController {
  constructor(private readonly loginUsecase: Login) {}

  @Get('/login')
  async login(@Body() request: UserLoginI): Promise<string> {
    const { email, password } = request;
    return await this.loginUsecase.execute(email, password);
  }
}
