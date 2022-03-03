import { Model, Column, DataType, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'username@mail.ru',
    description: 'email пользователя',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'пароль пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;


  @ApiProperty({
    example: 'true',
    description: 'забанен пользователь или нет',
    required: false,
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'причина',
    description: 'причина бана',
    required: false,
  })
  @Column({
    type: DataType.STRING,
  })
  banReason: string;
}