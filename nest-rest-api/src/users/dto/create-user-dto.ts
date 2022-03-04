import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';


export class CreateUserDto {
  @ApiProperty({
    example: 'username@mail.ru',
    description: 'email пользователя',
  })
  @IsString({ message: 'Дожно быть строкой' })
  @IsEmail({}, { message: 'Некорректный mail' })
  readonly email: string;


  @ApiProperty({
    example: 'password',
    description: 'пароль пользователя',
  })
  @IsString({ message: 'Дожно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не более 16 символов' })
  readonly password: string;
}