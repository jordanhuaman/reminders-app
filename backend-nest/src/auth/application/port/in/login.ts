import { UserRepository } from 'src/auth/domain/user.repository';
import { LoginUseCase } from '../../usecase/login.usecase';
import { Injectable } from '@nestjs/common';
import { HashProvider } from '../out/password.provider';
import { JwtProvider } from '../out/jwt.provider';
import { AuthInvalidCredentialsError } from '../../errors/auth.errors';

@Injectable()
export class Login implements LoginUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly passwordProvider: HashProvider,
    private readonly jwtProvider: JwtProvider,
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const result = await this.repository.findByEmail(email);

    if (result == null) {
      throw new AuthInvalidCredentialsError();
    }

    const comparePassword = await this.passwordProvider.compare(
      password,
      result.password,
    );

    if (!comparePassword) {
      throw new AuthInvalidCredentialsError();
    }

    const token = this.jwtProvider.generateTokens({
      sub: result.id,
      email: result.userName,
    });

    return token.accessToken;
  }
}
