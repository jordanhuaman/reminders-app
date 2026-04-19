export class Todo {
  private id: string;
  private title: string;
  private message: string;
  private state: State;
  private deadline: Date;
  private userId: string;

  private constructor(
    id: string,
    title: string,
    message: string,
    state: State,
    deadline: Date,
    userId: string,
  ) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.state = state;
    this.deadline = deadline;
    this.userId = userId;
  }

  public static getInstance(
    id: string,
    title: string,
    message: string,
    state: State,
    deadline: Date,
    userId: string,
  ): Todo {
    return new Todo(id, title, message, state, deadline, userId);
  }

  public getId(): string {
    return this.id;
  }
}

export enum State {
  CREATED = 1,
  COMPLETED = 2,
  EXPIRED = 3,
  DELETED = 4,
}
