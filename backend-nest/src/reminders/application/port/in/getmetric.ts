import { ReminderRepostory } from 'src/reminders/domain/entity/repository';
import { GetMetricUseCase } from '../../usecase/gemetric.usecase';
import { MetricResponseOut } from 'src/reminders/domain/vo/out/metricresponse.out';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetMetric implements GetMetricUseCase {
  constructor(private readonly repository: ReminderRepostory) {}
  async execute(_date: string, userId: string): Promise<MetricResponseOut> {
    const responseDb = await this.repository.getDailyMetric(userId);
    return {
      total: responseDb.total,
      totalDone: responseDb.todoDone,
    };
  }
}
