import { LastMetricResponseOut } from 'src/reminders/domain/vo/out/lastmetricresponse.out';

export interface GetAllReminderUseCase {
  execute(last: number, userId: string): Promise<LastMetricResponseOut[]>;
}
