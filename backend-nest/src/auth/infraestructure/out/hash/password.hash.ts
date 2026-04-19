import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { PasswordHashI } from 'src/auth/application/port/out/password.provider';

@Injectable()
export class PasswordHash extends PasswordHashI {
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
