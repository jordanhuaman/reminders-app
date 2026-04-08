import { Todo } from 'src/todo/domain/entity/todo';

export abstract class TodoRepository {
  abstract save(todo: Todo): Promise<string>;
  abstract findById(id: string): Promise<Todo | null>;
  abstract delete(id: string): Promise<void>;
}
