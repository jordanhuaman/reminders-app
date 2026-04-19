import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/auth/domain/user.repository';
import { User } from 'src/auth/domain/user.domain';

@Injectable()
export class UserRepositoryExtended extends UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {
    super();
  }

  login(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  create(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(userName: string): Promise<User | null> {
    const result = await this.repository.findOne({ where: { userName } });

    if (result == null) {
      return null;
    }

    return UserEntity.toDomain(result);
  }

  public async findOne(userName: string): Promise<UserEntity | null> {
    const result = await this.repository.findOne({ where: { userName } });
    return result || null;
  }
}
