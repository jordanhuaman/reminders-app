import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infraestructure/out/postgresql/user.entity';
import { UserRepositoryExtended } from './infraestructure/out/postgresql/pg.repository';
import { AuthController } from './infraestructure/in/rest/auth.controller';
import { Login } from './application/port/in/login';
import { PasswordHash } from './infraestructure/out/hash/password.hash';
import { Jwt } from './infraestructure/out/jwt/jwt';
import { UserRepository } from './domain/user.repository';
import { JwtProvider } from './application/port/out/jwt.provider';
import { HashProvider } from './application/port/out/password.provider';
import { LoggerMiddleware } from './infraestructure/in/middleware/auth.middleware';
import { Register } from './application/port/in/register';
import { UuidGeneratorImpl } from 'src/todo/infraestructure/out/uuid/uuid-generator';
import { UuidProvider } from 'src/todo/application/port/out/uuid.provider';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [
    Login,
    PasswordHash,
    Jwt,
    UserRepositoryExtended,
    Register,
    UuidGeneratorImpl,
    {
      provide: UserRepository,
      useExisting: UserRepositoryExtended,
    },
    {
      provide: HashProvider,
      useExisting: PasswordHash,
    },
    {
      provide: JwtProvider,
      useExisting: Jwt,
    },
    {
      provide: UuidProvider,
      useExisting: UuidGeneratorImpl,
    },
  ],
  exports: [Login, UserRepositoryExtended, Jwt, PasswordHash, Register],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'todo', method: RequestMethod.ALL });
  }
}
