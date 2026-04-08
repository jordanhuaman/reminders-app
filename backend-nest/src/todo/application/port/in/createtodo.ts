import { Todo } from 'src/todo/domain/entity/todo';
import { CreateTodoUsecase } from '../../usecase/createtodo.usecase';
import { TodoRepository } from '../../../domain/entity/todo.repository';
import { UuidGenerator } from '../out/uuid.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTodo implements CreateTodoUsecase {
  constructor(
    private readonly repositor: TodoRepository,
    private readonly uuidGenerator: UuidGenerator,
  ) {}
  async execute(
    title: string,
    message: string,
    state: number,
    deadline: Date,
    userId: string,
  ): Promise<string> {
    console.log('⭐⭐' + title);
    const uuigenerated = this.uuidGenerator.generateV7();
    console.log('⭐⭐' + uuigenerated);
    const todo = Todo.getInstance(
      uuigenerated,
      title,
      message,
      state,
      deadline,
      userId,
    );
    return await this.repositor.save(todo);
  }
}
