import { Todo } from './todo';

export class History {
  private constructor(
    private _id: string,
    private _todo: Todo,
    private _event: string,
  ) {}

  public toJSON(): string {
    return JSON.stringify({
      id: this._id,
      todo: this._todo.toJSON(),
      event: this._event,
    });
  }
  public id(): string {
    return this._id;
  }
  public event(): string {
    return this._event;
  }
  public todo(): Todo {
    return this._todo;
  }
}
