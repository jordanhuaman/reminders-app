import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/shared/@nest/guard/user.guard';
import { TokenPayload } from 'src/shared/@types/jwt';
import { ZodValidationPipe } from 'src/shared/zod';
import { GetMetric } from 'src/todo/application/port/in/getmetric';
import { MetricOut } from 'src/todo/domain/vo/out/metricout';
import {
  type GetTodoMetricQuery,
  GetTodoMetricQuerySchema,
} from 'src/todo/shared/zod/query.schema';

@Controller('/todo/metric')
@UseGuards(RolesGuard)
export class TodoMetricController {
  constructor(private getMetricUSeCase: GetMetric) {}

  @Get()
  async getMetrics(
    @Req() req: Request & { user: TokenPayload },
    @Query(new ZodValidationPipe(GetTodoMetricQuerySchema))
    query: GetTodoMetricQuery,
  ): Promise<MetricOut> {
    const { sub } = req.user;
    const { date } = query;
    return this.getMetricUSeCase.execute(date, sub);
  }
}
