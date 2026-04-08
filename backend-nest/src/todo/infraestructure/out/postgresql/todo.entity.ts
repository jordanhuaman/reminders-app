import { State, Todo } from 'src/todo/domain/entity/todo';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  private constructor(
    id: string,
    title: string,
    message: string,
    deadline: Date,
    userId: string,
  ) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.state = State.CREATED;
    this.deadline = deadline;
    this.userId = userId;
  }

  public static getInstance(
    id: string,
    title: string,
    message: string,
    deadline: Date,
    userId: string,
  ): TodoEntity {
    return new TodoEntity(id, title, message, deadline, userId);
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
}
