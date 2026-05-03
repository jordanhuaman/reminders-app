import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { GetMetric } from 'src/reminders/application/port/in/getmetric';
import { MetricResponseOut } from 'src/reminders/domain/vo/out/metricresponse.out';
import {
  type GetReminderQuery,
  GetReminderQuerySchema,
} from 'src/reminders/shared/zod/query.schema';
import { TokenPayload } from 'src/shared/@types/jwt';
import { ZodValidationPipe } from 'src/shared/zod';
import { CreateReminderDto } from 'src/shared/zod/reminder.schema';

@Controller('/reminder')
export class ReminderController {
  constructor(private readonly getMetricUseCase: GetMetric) { }

  @Post()
  async createReminder(
    @Req() req: Request & { user: TokenPayload },
    @Body() body: CreateReminderDto,
  ) {
    
  }

  @Get('/metric')
  async getMetrics(
    @Req() req: Request & { user: TokenPayload },
    @Query(new ZodValidationPipe(GetReminderQuerySchema))
    query: GetReminderQuery,
  ): Promise<MetricResponseOut> {
    const { sub } = req.user;
    const { date } = query;

    return await this.getMetricUseCase.execute(date, sub);
  }
}
