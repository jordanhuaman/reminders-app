import { State } from './status.domain';

export class Reminder {
  private constructor(
    private _id: string,
    private _title: string,
    private _state: State,
    private _date: Date,
  ) {}

  public static getInstance(
    id: string,
    title: string,
    state: State,
    date: Date,
  ) {
    return new Reminder(id, title, state, date);
  }

  get id(): string {
    return this._id;
  }
  get title(): string {
    return this._title;
  }
  get state(): State {
    return this._state;
  }
  get date(): Date {
    return this._date;
  }
}
