import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/auth/domain/user.repository';
import { User } from 'src/auth/domain/entities/user.domain';
import { QueryFailedError } from 'typeorm';
import { UserEmailAlreadyExistsError } from 'src/auth/application/errors/auth.errors';

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
  async create(
    id: string,
    userName: string,
    passwordHashed: string,
  ): Promise<void> {
    const domain = User.getInstance(userName, passwordHashed);
    const entity = UserEntity.getInstance(
      id,
      domain.userName,
      domain.password,
      domain.roles,
    );
    let result: UserEntity;
    try {
      result = await this.repository.save(entity);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error as QueryFailedError & { driverError?: { code?: string } })
          .driverError?.code === '23505'
      ) {
        throw new UserEmailAlreadyExistsError();
      }
      throw error;
    }

    console.log('⭐⭐ usercreated ' + result.id);

    return;
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
