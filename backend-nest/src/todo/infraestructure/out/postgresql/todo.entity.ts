import { State, Todo } from 'src/todo/domain/entity/todo';
import { TodoOut } from 'src/todo/domain/vo/todoout';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TodoHistoryEntity } from './todohistory.entity';

@Entity('todo')
export class TodoEntity {
  @PrimaryColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  message: string;
  @Column({
    type: 'enum',
    enum: State,
    default: State.CREATED,
  })
  state: State;
  @Column()
  deadline: Date;
  @Column()
  userId: string;

  @OneToMany(() => TodoHistoryEntity, (history) => history.todo, {
    lazy: false,
  })
  history?: TodoHistoryEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updateAt?: Date;

  private constructor(
    id: string,
    title: string,
    message: string,
    deadline: Date,
    userId: string,
    createdAt?: Date,
    updateAt?: Date,
  ) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.state = State.CREATED;
    this.deadline = deadline;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
  }

  public static fromDomain(todo: Todo): TodoEntity {
    return TodoEntity.getInstance(
      todo.id(),
      todo.title(),
      todo.message(),
      todo.deadline(),
      todo.userId(),
    );
  }

  public static getInstance(
    id: string,
    title: string,
    message: string,
    deadline: Date,
    userId: string,
    createAt?: Date,
    updateAt?: Date,
  ): TodoEntity {
    return new TodoEntity(
      id,
      title,
      message,
      deadline,
      userId,
      createAt,
      updateAt,
    );
  }

  public static toDomain(todoEntity: TodoEntity): Todo {
    return Todo.getInstance(
      todoEntity.id,
      todoEntity.title,
      todoEntity.message,
      todoEntity.state,
      todoEntity.deadline,
      todoEntity.userId,
    );
  }

  public static toOut(todoEntity: TodoEntity): TodoOut {
    return {
      id: todoEntity.id,
      title: todoEntity.title,
      message: todoEntity.message,
      state: todoEntity.state,
      deadline: todoEntity.deadline,
      userId: todoEntity.userId,
      createdAt: todoEntity.createdAt,
      updatedAt: todoEntity.updateAt,
    };
  }
}
