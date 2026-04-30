import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TodoEntity } from './todo.entity';
import { History } from 'src/todo/domain/entity/history';

@Entity('history')
export class TodoHistoryEntity {
  @PrimaryColumn('uuid')
  id: string;

  @ManyToOne(() => TodoEntity, (todo) => todo.history)
  todo: TodoEntity;

  @Column({ type: 'jsonb' })
  event: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  private constructor(
    id: string,
    todo: TodoEntity,
    event: string,
    createAt?: Date,
    updateAt?: Date,
  ) {
    this.id = id;
    this.todo = todo;
    this.event = event;
    this.createdAt = createAt;
    this.updatedAt = updateAt;
  }

  public static fromDomain(history: History): TodoHistoryEntity {
    return TodoHistoryEntity.getInstance(
      history.id(),
      TodoEntity.fromDomain(history.todo()),
      history.event(),
    );
  }

  public static getInstance(
    id: string,
    todo: TodoEntity,
    event: string,
    createAt?: Date,
    updateAt?: Date,
  ) {
    return new TodoHistoryEntity(id, todo, event, createAt, updateAt);
  }
}
