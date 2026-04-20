import { UserRole } from 'src/auth/domain/roles.enum';
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
  @Column({
    type: 'simple-array',
    enum: UserRole,
    default: [UserRole.USER],
  })
  private roles: UserRole[];

  private constructor(
    id: string,
    userName: string,
    password: string,
    roles: UserRole[],
  ) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.roles = roles;
  }

  public static getInstance(
    id: string,
    userName: string,
    password: string,
    roles: UserRole[],
  ): UserEntity {
    return new UserEntity(id, userName, password, roles);
  }

  public static toDomain(userEntity: UserEntity): User {
    return User.getInstance(userEntity.userName, userEntity.password);
  }
}
