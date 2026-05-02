import { Injectable } from '@nestjs/common';
import { GetMetricUseCase } from '../../usecase/getmetric.usecase';
import { MetricOut } from 'src/todo/domain/vo/out/metricout';
import { TodoRepository } from 'src/todo/domain/entity/repository';
import { QueueProvider } from '../out/QueueProvider';

@Injectable()
export class GetMetric implements GetMetricUseCase {
  constructor(
    private readonly reporitory: TodoRepository,
    private readonly eventBuss: QueueProvider,
  ) {}

  async execute(date: string, userId: string): Promise<MetricOut> {
    const respose = await this.reporitory.getMetric(date, userId);
    return {
      taskDone: respose.todoDone,
      total: respose.total,
    };
  }
}
