import { Reminder, State } from 'src/reminders/domain/entity/reminder';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('reminder')
export class ReminderEntity {
  @PrimaryColumn('uuid')
  private id: string;

  @Column()
  title: string;
  @Column()
  state: State;
  @Column()
  date: Date;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  private constructor(
    id: string,
    title: string,
    state: State,
    date: Date,
    createdAt?: Date,
  ) {
    this.id = id;
    this.title = title;
    this.state = state;
    this.date = date;
    this.createdAt = createdAt;
  }

  public static getInstace(
    id: string,
    title: string,
    state: State,
    date: Date,
    createdAt?: Date,
  ) {
    return new ReminderEntity(id, title, state, date, createdAt);
  }

  public static fromDomain(reminder: Reminder): ReminderEntity {
    return ReminderEntity.getInstace(
      reminder.id,
      reminder.title,
      reminder.state,
      reminder.date,
    );
  }
}
