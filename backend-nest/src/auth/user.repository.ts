import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryExtended {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  public async findOne(userName: string): Promise<UserEntity | null> {
    const result = await this.repository.findOne({ where: { userName } });
    return result || null;
  }
}
