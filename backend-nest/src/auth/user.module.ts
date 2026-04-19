import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infraestructure/out/postgresql/user.entity';
import { UserRepositoryExtended } from './infraestructure/out/postgresql/pg.repository';
import { AuthController } from './infraestructure/in/rest/auth.controller';
import { Login } from './application/port/in/login';
import { PasswordHash } from './infraestructure/out/hash/password.hash';
import { Jwt } from './infraestructure/out/jwt/jwt';
import { UserRepository } from './domain/user.repository';
import { JwtProvider } from './application/port/out/jwt.provider';
import { PasswordHashI } from './application/port/out/password.provider';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [
    Login,
    PasswordHash,
    Jwt,
    UserRepositoryExtended,
    {
      provide: UserRepository,
      useExisting: UserRepositoryExtended,
    },
    {
      provide: PasswordHashI,
      useExisting: PasswordHash,
    },
    {
      provide: JwtProvider,
      useExisting: Jwt,
    },
  ],
  exports: [Login, UserRepositoryExtended, Jwt, PasswordHash],
})
export class UserModule {}
