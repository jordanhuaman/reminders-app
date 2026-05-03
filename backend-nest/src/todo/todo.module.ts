import { Module } from '@nestjs/common';
import { TodoController } from './infraestructure/in/rest/todo.controller';
import { CreateTodo } from './application/port/in/createtodo';
import { TodoRepositoryExtend } from './infraestructure/out/postgresql/pg.repository';
import { UuidGeneratorImpl } from '../shared/infra/uuid/uuid-generator';
import { TodoRepository } from './domain/entity/repository';
import { UuidProvider } from './application/port/out/uuid.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './infraestructure/out/postgresql/todo.entity';
import { GetAll } from './application/port/in/getall';
import { UserModule } from 'src/auth/user.module';
import { TodoHistoryEntity } from './infraestructure/out/postgresql/todohistory.entity';
import { BullmqEventPublisher } from './infraestructure/out/queue/bullqueue';
import { QueueProvider } from './application/port/out/queue.provider';
import { BullModule } from '@nestjs/bullmq';
import { TodoAsyncController } from './infraestructure/in/async/todoasync.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity, TodoHistoryEntity]),
    UserModule,
    BullModule.registerQueue({ name: 'todo-domain-events' }),
  ],
  controllers: [TodoController],
  providers: [
    CreateTodo,
    GetAll,
    TodoRepositoryExtend,
    UuidGeneratorImpl,
    BullmqEventPublisher,
    TodoAsyncController,
    {
      provide: TodoRepository,
      useExisting: TodoRepositoryExtend,
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
  exports: [CreateTodo, TodoRepository, UuidProvider],
})
export class TodoModule {}
