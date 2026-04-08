export interface CreateTodoUsecase {
  execute(
    title: string,
    message: string,
    state: number,
    deadline: Date,
    userId: string,
  ): Promise<string>;
}
