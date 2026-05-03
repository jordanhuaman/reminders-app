import { State } from 'src/reminders/domain/entity/reminder';

export interface CreateReminderUseCase {
  execute(title: string, userId: string, state: State): Promise<void>;
}
