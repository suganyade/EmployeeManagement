/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  department!: string;

  @IsNumber()
  @IsEmpty()
  salary!: number;
}
