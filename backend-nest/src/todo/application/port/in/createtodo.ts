import { State, Todo } from 'src/todo/domain/entity/todo';
import { CreateTodoUsecase } from '../../usecase/createtodo.usecase';
import { TodoRepository } from '../../../domain/entity/repository';
import { UuidProvider } from '../out/uuid.provider';
import { Injectable } from '@nestjs/common';
import { QueueProvider } from '../out/QueueProvider';

@Injectable()
export class CreateTodo implements CreateTodoUsecase {
  constructor(
    private readonly repository: TodoRepository,
    private readonly uuidProvider: UuidProvider,
    private readonly eventbuss: QueueProvider,
  ) {}
  async execute(
    title: string,
    state: State,
    deadline: string,
    userId: string,
    message?: string,
  ): Promise<string> {
    const uuigenerated = this.uuidProvider.generateV7();
    const dateParsed = new Date(deadline);
    const todo = Todo.getInstance(
      uuigenerated,
      title,
      state,
      dateParsed,
      userId,
      message,
    );
    const response = await this.repository.save(todo);
    await this.eventbuss.publish('todocreated', { todoId: response });
    return response;
  }
}
