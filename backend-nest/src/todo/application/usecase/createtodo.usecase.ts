import { State } from 'src/todo/domain/entity/todo';

export interface CreateTodoUsecase {
  execute(
    title: string,
    state: State,
    deadline: string,
    userId: string,
    message?: string,
  ): Promise<string>;
}
