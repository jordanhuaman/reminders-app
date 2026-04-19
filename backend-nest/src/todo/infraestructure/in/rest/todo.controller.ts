import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { createZodValidationPipe } from 'src/shared/zod/todo.pipe';
import { createTodoSchema } from 'src/shared/zod/todo.schema';
import { CreateTodo } from 'src/todo/application/port/in/createtodo';
import type { TodoIn } from 'src/todo/domain/in/todo.in';

@Controller('/todo')
export class TodoController {
  constructor(private readonly createTodoUseCase: CreateTodo) {}

  @Get()
  findAll(): string {
    return 'Hello world';
  }
  @Post()
  @UsePipes(createZodValidationPipe(createTodoSchema))
  async create(@Body() request: TodoIn): Promise<string> {
    const { title, message, state, deadline, userId } = request;

    const result = await this.createTodoUseCase.execute(
      title,
      message,
      state,
      deadline,
      userId,
    );

    return result;
  }
}
