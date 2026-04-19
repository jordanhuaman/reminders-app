import { User } from './user.domain';

export abstract class UserRepository {
  abstract login(): Promise<string>;
  abstract create(): Promise<void>;
  abstract findByEmail(userName: string): Promise<User | null>;
}
