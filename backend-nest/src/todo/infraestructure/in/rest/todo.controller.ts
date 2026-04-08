import { Body, Controller, Get, Post } from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateTodo } from 'src/todo/application/port/in/createtodo';
import type { TodoIn } from 'src/todo/domain/in/todoin';

@Controller('/todo')
export class TodoController {
  constructor(private readonly createTodoUseCase: CreateTodo) {}

  @Get()
  findAll(): string {
    return 'Hello world';
  }
  @Post()
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
