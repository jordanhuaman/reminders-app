import { Module } from '@nestjs/common';
import { TodoController } from './infraestructure/in/rest/todo.controller';
import { CreateTodo } from './application/port/in/createtodo';
import { TodoRepositoryExtend } from './infraestructure/out/postgresql/pg.repositry';
import { UuidGeneratorImpl } from './infraestructure/out/uuid/uuid-generator';
import { TodoRepository } from './domain/entity/repository';
import { UuidProvider } from './application/port/out/uuid.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './infraestructure/out/postgresql/todo.entity';
import { GetAll } from './application/port/in/getall';
import { UserModule } from 'src/auth/user.module';
import { TodoHistoryEntity } from './infraestructure/out/postgresql/todohistory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity, TodoHistoryEntity]),
    UserModule,
  ],
  controllers: [TodoController],
  providers: [
    CreateTodo,
    GetAll,
    TodoRepositoryExtend,
    UuidGeneratorImpl,
    {
      provide: TodoRepository,
      useExisting: TodoRepositoryExtend,
    },
    {
      provide: UuidProvider,
      useExisting: UuidGeneratorImpl,
    },
  ],
  exports: [CreateTodo, TodoRepository, UuidProvider],
})
export class TodoModule {}
