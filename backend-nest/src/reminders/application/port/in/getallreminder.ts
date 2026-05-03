import { LastMetricResponseOut } from 'src/reminders/domain/vo/out/lastmetricresponse.out';
import { GetAllReminderUseCase } from '../../usecase/getallreminder.usecase';
import { ReminderRepostory } from 'src/reminders/domain/entity/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllReminder implements GetAllReminderUseCase {
  constructor(private readonly repository: ReminderRepostory) {}

  async execute(
    last: number,
    userId: string,
  ): Promise<LastMetricResponseOut[]> {
    const response = this.repository.getAll(last, userId);
    return response;
  }
}
