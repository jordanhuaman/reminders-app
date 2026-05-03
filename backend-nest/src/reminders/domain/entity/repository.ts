import { MetricResponseDb } from '../vo/in/metric.rd';
import { LastMetricResponseOut } from '../vo/out/lastmetricresponse.out';
import { Reminder } from './reminder';

export abstract class ReminderRepostory {
  abstract save(reminder: Reminder): Promise<void>;
  abstract getDailyMetric(userId: string): Promise<MetricResponseDb>;
  abstract getAll(
    last: number,
    userId: string,
  ): Promise<LastMetricResponseOut[]>;
}
