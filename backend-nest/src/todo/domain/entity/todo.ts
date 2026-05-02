export class Todo {
  private constructor(
    private _id: string,
    private _title: string,
    private _state: State,
    private _deadline: Date,
    private _userId: string,
    private _message?: string,
  ) {}

  public static getInstance(
    id: string,
    title: string,
    state: State,
    deadline: Date,
    userId: string,
    message?: string,
  ): Todo {
    return new Todo(id, title, state, deadline, userId, message);
  }

  public toJSON(): string {
    return JSON.stringify({
      id: this._id,
      title: this._title,
      message: this._message,
      state: this._state,
      deadline: this._deadline,
      userId: this._userId,
    });
  }

  public id(): string {
    return this._id;
  }
  public title(): string {
    return this._title;
  }
  public message(): string | undefined {
    return this._message;
  }
  public state(): State {
    return this._state;
  }
  public deadline(): Date {
    return this._deadline;
  }
  public userId(): string {
    return this._userId;
  }
}

export enum State {
  CREATED = 1,
  COMPLETED = 2,
  EXPIRED = 3,
  DELETED = 4,
}
