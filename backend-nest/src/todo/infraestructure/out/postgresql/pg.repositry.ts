import { ILike, Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from 'src/todo/domain/entity/todo.repository';
import { Todo } from 'src/todo/domain/entity/todo.domain';
import { TodoOut } from 'src/todo/domain/in/todo.out';

@Injectable()
export class TodoRepositoryExtend extends TodoRepository {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly repository: Repository<TodoEntity>,
  ) {
    super();
  }

  async findAll(
    userId: string,
    title: string,
    page: number,
    size: number,
  ): Promise<TodoOut[]> {
    const result = await this.repository.find({
      where: {
        userId: userId,
        title: ILike(`%${title}%`),
      },
      skip: (page - 1) * size,
      take: size,
      order: {
        createdAt: 'DESC',
      },
    });

    return result.map((todo) => TodoEntity.toOut(todo));
  }

  async findById(id: string): Promise<TodoOut | null> {
    const result = await this.repository.findOne({ where: { id } });

    if (!result) {
      return null;
    }
    return TodoEntity.toOut(result);
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async save(todo: Todo): Promise<string> {
    await this.repository.save(todo);
    return todo.getId();
  }
}
