import { UserRole } from './roles.enum';

export class User {
  private constructor(
    private readonly _userName: string,
    private readonly _password: string,
    private readonly _id?: string,
    private readonly _roles?: UserRole[],
  ) {
    if (_roles === undefined || _roles.length == 0) {
      this._roles = [UserRole.USER];
    }
  }

  public static getInstance(
    userName: string,
    password: string,
    id?: string,
    roles?: UserRole[],
  ): User {
    return new User(userName, password, id, roles);
  }

  get userName(): string {
    return this._userName;
  }
  get password(): string {
    return this._password;
  }
  get roles(): UserRole[] {
    return this._roles as UserRole[];
  }
  get id(): string {
    return this._id as string;
  }
}
