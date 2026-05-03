import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';
import { UserEntity } from './infraestructure/out/postgresql/user.entity';
import { UserRepositoryExtended } from './infraestructure/out/postgresql/pg.repository';
import { AuthController } from './infraestructure/in/rest/auth.controller';
import { Login } from './application/port/in/login';
import { PasswordHash } from './infraestructure/out/hash/password.hash';
import { Jwt } from './infraestructure/out/jwt/jwt';
import { UserRepository } from './domain/user.repository';
import { JwtProvider } from './application/port/out/jwt.provider';
import { HashProvider } from './application/port/out/password.provider';
import { Register } from './application/port/in/register';
import { UuidGeneratorImpl } from 'src/shared/infra/uuid/uuid-generator';
import { UuidProvider } from 'src/todo/application/port/out/uuid.provider';
import { BullmqEventPublisher } from './infraestructure/out/queue/bull.queue';
import { QueueProvider } from './application/port/out/queue.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    BullModule.registerQueue({ name: 'auth-domain-events' }),
  ],
  controllers: [AuthController],
  providers: [
    Login,
    PasswordHash,
    Jwt,
    UserRepositoryExtended,
    Register,
    UuidGeneratorImpl,
    BullmqEventPublisher,
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
    {
      provide: QueueProvider,
      useExisting: BullmqEventPublisher,
    },
  ],
  exports: [
    Login,
    UserRepositoryExtended,
    Jwt,
    PasswordHash,
    Register,
    BullmqEventPublisher,
  ],
})
export class UserModule {}

// export class UserModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({ path: 'todo', method: RequestMethod.ALL });
//   }
// }
