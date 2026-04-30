import { State } from '../entity/reminder';

export interface createReminder {
  id: string;
  title: string;
  state: State;
  date: Date;
  createAt: Date;
}