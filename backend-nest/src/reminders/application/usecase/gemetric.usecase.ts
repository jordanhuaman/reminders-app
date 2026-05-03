import { MetricResponseOut } from 'src/reminders/domain/vo/out/metricresponse.out';

export interface GetMetricUseCase {
  execute(date: string, userId: string): Promise<MetricResponseOut>;
}
