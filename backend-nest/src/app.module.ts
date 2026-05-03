import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/infraestructure/out/postgresql/todo.entity';
import { UserModule } from './auth/user.module';
import { UserEntity } from './auth/infraestructure/out/postgresql/user.entity';
import { BullModule } from '@nestjs/bullmq';
import { TodoHistoryEntity } from './todo/infraestructure/out/postgresql/todohistory.entity';
import { ReminderModule } from './reminders/reminder.module';
import { ReminderEntity } from './reminders/infraestructure/out/postgres/reminder.entity';

@Module({
  imports: [
    TodoModule,
    UserModule,
    ReminderModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'todo_db',
      entities: [TodoEntity, UserEntity, TodoHistoryEntity, ReminderEntity],
      synchronize: true,
    }),
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
