import { TodoOut } from 'src/todo/domain/vo/todoout';

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
