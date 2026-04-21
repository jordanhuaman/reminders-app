import { State, Todo } from 'src/todo/domain/entity/todo.domain';
import { TodoOut } from 'src/todo/domain/in/todo.out';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryColumn('uuid')
  private id: string;

  @Column()
  private title: string;
  @Column()
  private message: string;
  @Column({
    type: 'enum',
    enum: State,
    default: State.CREATED,
  })
  private state: State;
  @Column()
  private deadline: Date;
  @Column()
  private userId: string;
  @CreateDateColumn({ type: 'timestamp' })
  private createdAt: Date;
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  private updateAt?: Date;

  private constructor(
    id: string,
    title: string,
    message: string,
    deadline: Date,
    userId: string,
    createdAt: Date,
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

  public static getInstance(
    id: string,
    title: string,
    message: string,
    deadline: Date,
    userId: string,
    createAt: Date,
    updateAt: Date,
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
