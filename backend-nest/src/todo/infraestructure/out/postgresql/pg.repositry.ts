import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from 'src/todo/domain/entity/todo.repository';
import { Todo } from 'src/todo/domain/entity/todo';

@Injectable()
export class TodoRepositoryExtend implements TodoRepository {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly repository: Repository<TodoEntity>,
  ) {}

  async findById(id: string): Promise<Todo | null> {
    const result = await this.repository.findOne({ where: { id } });

    if (!result) {
      return null;
    }
    return TodoEntity.toDomain(result);
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async save(todo: Todo): Promise<string> {
    await this.repository.save(todo);
    return todo.getId();
  }
}
