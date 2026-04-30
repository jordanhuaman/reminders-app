import { Todo } from 'src/todo/domain/entity/todo';
import { TodoOut } from '../vo/todoout';

export abstract class TodoRepository {
  abstract findAll(
    userId: string,
    title: string,
    page: number,
    size: number,
  ): Promise<TodoOut[]>;
  abstract save(todo: Todo): Promise<string>;
  abstract findById(id: string): Promise<TodoOut | null>;
  abstract delete(id: string): Promise<void>;
}
