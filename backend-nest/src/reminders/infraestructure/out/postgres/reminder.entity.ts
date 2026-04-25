import { State } from 'src/reminders/domain/entity/status.domain';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('reminder')
export class Reminder {
  @PrimaryColumn('uuid')
  private id: string;

  @Column()
  private title: string;
  @Column()
  private state: State;
  @Column()
  private date: Date;
  @CreateDateColumn({ type: 'timestamp' })
  private createdAt: Date;
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  private updateAt?: Date;

  private constructor(
    id: string,
    title: string,
    state: State,
    date: Date,
    createAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.state = state;
    this.date = date;
    this.createdAt = createAt;
  }

  public static getInstace(
    id: string,
    title: string,
    state: State,
    date: Date,
    createAt: Date,
  ) {
    return new Reminder(id, title, state, date, createAt);
  }
}
