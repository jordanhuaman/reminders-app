import { ReminderRepostory } from 'src/reminders/domain/entity/repository';
import { CreateReminderUseCase } from '../../usecase/createreminder.usecase';
import { Injectable } from '@nestjs/common';
import { Reminder, State } from 'src/reminders/domain/entity/reminder';
import { UuidProvider } from '../out/uuid.provider';

@Injectable()
export class CreateReminder implements CreateReminderUseCase {
  constructor(
    private readonly repository: ReminderRepostory,
    private readonly uuidProvider: UuidProvider,
  ) {}
  async execute(title: string, userId: string, state: State): Promise<void> {
    const uuid = this.uuidProvider.generateV7();
    const domain = Reminder.getInstance(uuid, title, userId, state, new Date());
    await this.repository.save(domain);
    return;
  }
}
