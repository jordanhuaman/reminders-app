export class User {
  private constructor(
    private readonly _userName: string,
    private readonly _password: string,
  ) {}

  public static getInstance(userName: string, password: string): User {
    return new User(userName, password);
  }

  get userName(): string {
    return this._userName;
  }
  get password(): string {
    return this._password;
  }
}
