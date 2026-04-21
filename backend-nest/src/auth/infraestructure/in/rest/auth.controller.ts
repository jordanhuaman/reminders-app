import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { Login } from 'src/auth/application/port/in/login';
import { Register } from 'src/auth/application/port/in/register';
import { RolesGuard } from 'src/shared/@nest/guard/user.guard';
import { TokenPayload } from 'src/shared/@types/jwt';
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
  @UseGuards(RolesGuard)
  async login(
    @Req() req: Request & { user: TokenPayload },
    @Body() request: UserLoginI,
  ): Promise<string> {
    const { sub } = req.user;

    const { email, password } = request;
    return await this.loginUsecase.execute(sub, email, password);
  }
}
