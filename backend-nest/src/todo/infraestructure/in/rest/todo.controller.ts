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
import { RolesGuard } from 'src/shared/@nest/guard/user.guard';
import type { RequestWithUser } from 'src/shared/@types/express';
import { TokenPayload } from 'src/shared/@types/jwt';
import { createZodValidationPipe, ZodValidationPipe } from 'src/shared/zod';
import {
  GetTodosQuerySchema,
  type GetTodosQueryDto,
} from 'src/shared/zod/query.schema';
import { createTodoSchema } from 'src/shared/zod/todo.schema';
import { CreateTodo } from 'src/todo/application/port/in/createtodo';
import { GetAll } from 'src/todo/application/port/in/getall';
import type { TodoIn } from 'src/todo/domain/vo/todoin';
import { TodoOut } from 'src/todo/domain/vo/todoout';

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
    @Query(new ZodValidationPipe(GetTodosQuerySchema)) query: GetTodosQueryDto,
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
    @Req() req: RequestWithUser,
    @Body() body: TodoIn,
  ): Promise<string> {
    const payload = req.user;

    if (payload === undefined) {
      throw new Error('no user provided');
    }

    const userId = payload.sub;
    const { title, message, state, deadline } = body;

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
