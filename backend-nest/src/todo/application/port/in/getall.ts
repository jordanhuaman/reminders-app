import { TodoOut } from 'src/todo/domain/V0/todo.out';
import { GetAllTodoUseCase } from '../../usecase/getall.usecase';
import { TodoRepository } from 'src/todo/domain/entity/todo.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAll implements GetAllTodoUseCase {
  constructor(private readonly repository: TodoRepository) {}

  async execute({
    userId,
    title,
    page,
    size,
  }: {
    userId: string;
    title: string;
    page: number;
    size: number;
  }): Promise<TodoOut[]> {
    return await this.repository.findAll(userId, title, page, size);
  }
}
