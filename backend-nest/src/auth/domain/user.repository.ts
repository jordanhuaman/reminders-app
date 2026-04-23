import { User } from './entities/user.domain';

export abstract class UserRepository {
  abstract login(): Promise<string>;
  abstract create(
    id: string,
    userName: string,
    passwordHashed: string,
  ): Promise<void>;
  abstract findByEmail(userName: string): Promise<User | null>;
}
