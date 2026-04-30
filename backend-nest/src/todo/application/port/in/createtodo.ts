import { Todo } from 'src/todo/domain/entity/todo';
import { CreateTodoUsecase } from '../../usecase/createtodo.usecase';
import { TodoRepository } from '../../../domain/entity/repository';
import { UuidProvider } from '../out/uuid.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTodo implements CreateTodoUsecase {
  constructor(
    private readonly repository: TodoRepository,
    private readonly uuidProvider: UuidProvider,
  ) {}
  async execute(
    title: string,
    message: string,
    state: number,
    deadline: Date,
    userId: string,
  ): Promise<string> {
    const uuigenerated = this.uuidProvider.generateV7();
    const todo = Todo.getInstance(
      uuigenerated,
      title,
      message,
      state,
      deadline,
      userId,
    );
    return await this.repository.save(todo);
  }
}
