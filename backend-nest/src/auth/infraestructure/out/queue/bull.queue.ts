// infrastructure/queues/bullmq-event-publisher.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { QueueProvider } from 'src/auth/application/port/out/queue.provider';

@Injectable()
export class BullmqEventPublisher implements QueueProvider {
  constructor(
    @InjectQueue('auth-domain-events') private readonly queue: Queue,
  ) {}

  async publish(eventName: string, payload: unknown): Promise<void> {
    await this.queue.add(eventName, payload, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 1000 },
    });
  }
}
