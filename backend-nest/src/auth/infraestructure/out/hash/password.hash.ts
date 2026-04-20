import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { HashProvider } from 'src/auth/application/port/out/password.provider';

@Injectable()
export class PasswordHash extends HashProvider {
  private rounds: number;

  constructor() {
    super();
    this.rounds = 12;
  }

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.rounds);
  }

  async compare(password: string, hashDbPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashDbPassword);
  }
}
