import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReminderRepostory } from 'src/reminders/domain/entity/repository';
import { ReminderEntity } from './reminder.entity';
import { Repository } from 'typeorm';
import { Reminder, State } from 'src/reminders/domain/entity/reminder';
import { MetricResponseDb } from 'src/reminders/domain/vo/in/metric.rd';

@Injectable()
export class ReminderRepositoryExtended extends ReminderRepostory {
  constructor(
    @InjectRepository(ReminderEntity)
    private readonly repository: Repository<ReminderEntity>,
  ) {
    super();
  }

  async save(reminder: Reminder): Promise<void> {
    await this.repository.save(ReminderEntity.fromDomain(reminder));
  }
  async getDailyMetric(userId: string): Promise<MetricResponseDb> {
    const now = new Date();
    const firstDayOfTheMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const result = await this.repository
      .createQueryBuilder('reminder')
      .select('COUNT(reminder.id)', 'total')
      .addSelect(
        'SUM(CASE WHEN reminder.state = :stateCompleted THEN 1 else 0 end)',
        'totalCompleted',
      )
      .where('reminder.userId = :userId', { userId })
      .andWhere('reminder.createdAt >= :firstDayOfTheMonth', {
        firstDayOfTheMonth,
      })
      .andWhere('reminder.createdAt >= :now', { now })
      .setParameters({ stateCompleted: State.DONE })
      .getRawOne<{ total: string; totalCompleted: string }>();

    return {
      todoDone: Number(result?.totalCompleted ?? 0),
      total: Number(result?.total ?? 0),
    };
  }
}
