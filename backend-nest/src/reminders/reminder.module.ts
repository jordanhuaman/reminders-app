import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReminderEntity } from './infraestructure/out/postgres/reminder.entity';
import { UserModule } from 'src/auth/user.module';
import { BullModule } from '@nestjs/bullmq';
import { ReminderController } from './infraestructure/in/rest/reminder.controller';
import { CreateReminder } from './application/port/in/createreminder';
import { GetMetric } from './application/port/in/getmetric';
import { UuidGeneratorImpl } from 'src/shared/infra/uuid/uuid-generator';
import { ReminderRepositoryExtended } from './infraestructure/out/postgres/pg.repository';
import { ReminderRepostory } from './domain/entity/repository';
import { UuidProvider } from './application/port/out/uuid.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReminderEntity]),
    UserModule,
    BullModule.registerQueue({ name: 'reminder-domain-events' }),
  ],
  controllers: [ReminderController],
  providers: [
    CreateReminder,
    GetMetric,
    ReminderRepositoryExtended,
    UuidGeneratorImpl,
    {
      provide: ReminderRepostory,
      useExisting: ReminderRepositoryExtended,
    },
    {
      provide: UuidProvider,
      useExisting: UuidGeneratorImpl,
    },
  ],
})
export class ReminderModule {}
