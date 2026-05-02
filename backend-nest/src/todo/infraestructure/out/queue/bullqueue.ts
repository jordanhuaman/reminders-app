import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { QueueProvider } from 'src/todo/application/port/out/QueueProvider';

@Injectable()
export class BullmqEventPublisher extends QueueProvider {
  constructor(
    @InjectQueue('todo-domain-events') private readonly queue: Queue,
  ) {
    super();
  }

  async publish(eventName: string, payload: unknown): Promise<void> {
    await this.queue.add(eventName, payload, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 1000 },
    });
  }
}
