import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { RolesGuard } from 'src/shared/@nest/guard/user.guard';
import { TokenPayload } from 'src/shared/@types/jwt';
import { createZodValidationPipe } from 'src/shared/zod/todo.pipe';
import { createTodoSchema } from 'src/shared/zod/todo.schema';
import { CreateTodo } from 'src/todo/application/port/in/createtodo';
import { GetAll } from 'src/todo/application/port/in/getall';
import type { TodoIn } from 'src/todo/domain/in/todo.in';
import { TodoOut } from 'src/todo/domain/in/todo.out';

@Controller('/todo')
export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodo,
    private readonly getAllTodoUseCase: GetAll,
  ) {}

  @UseGuards(RolesGuard)
  @Get()
  async findAll(
    @Req() req: Request & { user: TokenPayload },
  ): Promise<TodoOut[]> {
    const { sub } = req.user;
    const result = await this.getAllTodoUseCase.execute({
      userId: sub,
      page: 1,
      size: 1,
      title: '',
    });

    return result;
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
