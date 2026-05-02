import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('todo-domain-events')
export class TodoAsyncController extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      progress += 1;
      await job.updateProgress(progress);
    }
    return {};
  }
}
