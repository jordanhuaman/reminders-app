import { TodoOut } from 'src/todo/domain/V0/todo.out';

export interface GetAllTodoUseCase {
  execute({
    userId,
    title,
    page,
    size,
  }: {
    userId: string;
    title: string;
    page: number;
    size: number;
  }): Promise<TodoOut[]>;
}
