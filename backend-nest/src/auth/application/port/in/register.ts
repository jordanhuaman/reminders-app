import { Injectable } from '@nestjs/common';
import { RegisterUseCase } from '../../usecase/register.usecase';
import { UserRepository } from 'src/auth/domain/user.repository';
import { UuidProvider } from 'src/todo/application/port/out/uuid.provider';
import { HashProvider } from '../out/password.provider';
import { UserEmailAlreadyExistsError } from '../../errors/auth.errors';

@Injectable()
export class Register implements RegisterUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly uuidProvider: UuidProvider,
    private readonly hashProvider: HashProvider,
  ) {}
  async execute(email: string, password: string): Promise<void> {
    const result = await this.repository.findByEmail(email);

    if (result != null) {
      throw new UserEmailAlreadyExistsError();
    }

    const id = this.uuidProvider.generateV7();
    const passwordHashed = await this.hashProvider.hash(password);

    await this.repository.create(id.toString(), email, passwordHashed);

    return;
  }
}
