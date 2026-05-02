import { MetricOut } from 'src/todo/domain/vo/out/metricout';

export interface GetMetricUseCase {
  execute(date: string, userId: string): Promise<MetricOut>;
}
