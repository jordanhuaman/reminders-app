import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Request } from 'express';
import { RolesGuard } from 'src/shared/@nest/guard/user.guard';
import { TokenPayload } from 'src/shared/@types/jwt';
import { createZodValidationPipe, ZodValidationPipe } from 'src/shared/zod';
import {
  GetTodosQuerySchema,
  type GetTodoQuery,
} from 'src/shared/zod/query.schema';
import {
  type CreateTodoDto,
  createTodoSchema,
} from 'src/shared/zod/todo.schema';
import { CreateTodo } from 'src/todo/application/port/in/createtodo';
import { GetAll } from 'src/todo/application/port/in/getall';
import { TodoOut } from 'src/todo/domain/vo/out/todoout';

@Controller('/todo')
@UseGuards(RolesGuard)
export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodo,
    private readonly getAllTodoUseCase: GetAll,
  ) {}

  @Get()
  async findAll(
    @Req() req: Request & { user: TokenPayload },
    @Query(new ZodValidationPipe(GetTodosQuerySchema)) query: GetTodoQuery,
  ): Promise<TodoOut[]> {
    const { sub } = req.user;
    const result = await this.getAllTodoUseCase.execute({
      userId: sub,
      page: query.page,
      size: query.size,
      title: query.title,
    });

    return result;
  }
  @Post()
  @UsePipes(createZodValidationPipe(createTodoSchema))
  async create(
    @Req() req: Request & { user: TokenPayload },
    @Body() body: CreateTodoDto,
  ): Promise<string> {
    const { sub } = req.user;
    const { title, message, state, deadline } = body;

    const result = await this.createTodoUseCase.execute(
      title,
      state,
      deadline,
      sub,
      message,
    );

    return result;
  }
}
