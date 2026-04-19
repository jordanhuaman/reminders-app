import { UserRepository } from 'src/auth/domain/user.repository';
import { LoginUseCase } from '../../usecase/login.usecase';
import { Injectable } from '@nestjs/common';
import { PasswordHashI } from '../out/password.provider';

@Injectable()
export class Login implements LoginUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly passwordProvider: PasswordHashI,
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const result = await this.repository.findByEmail(email);

    if (result == null) {
      throw new Error('');
    }

    const comparePassword = await this.passwordProvider.compare(
      password,
      result.userName,
    );

    if (!comparePassword) {
      throw new Error('');
    }

    return '';
  }
}
