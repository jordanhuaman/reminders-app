export interface LoginUseCase {
  execute(sub: string, email: string, password: string): Promise<string>;
}
