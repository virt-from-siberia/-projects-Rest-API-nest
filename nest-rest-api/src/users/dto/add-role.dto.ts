import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {

  @IsString({ message: 'должно быть строкой' })
  readonly value: string;

  @IsNumber({}, { message: 'должно быть числом' })
  readonly userId: number;
}