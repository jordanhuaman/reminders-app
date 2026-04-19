import { User } from 'src/auth/domain/user.domain';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn('uuid')
  public id: string;

  @Column({ unique: true })
  public userName: string;
  @Column()
  public password: string;

  private constructor(id: string, userName: string, password: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
  }

  public static getInstance(
    id: string,
    userName: string,
    password: string,
  ): UserEntity {
    return new UserEntity(id, userName, password);
  }

  public static toDomain(userEntity: UserEntity): User {
    return User.getInstance(userEntity.userName, userEntity.password);
  }
}
