import { MetricResponseDb } from '../vo/in/metric.rd';
import { Reminder } from './reminder';

export abstract class ReminderRepostory {
  abstract save(reminder: Reminder): Promise<void>;
  abstract getDailyMetric(userId: string): Promise<MetricResponseDb>;
}
