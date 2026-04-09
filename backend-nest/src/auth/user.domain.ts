export class User {
  private userName: string;
  private password: string;

  private constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }

  public static getInstance(userName: string, password: string): User {
    return new User(userName, password);
  }
}
