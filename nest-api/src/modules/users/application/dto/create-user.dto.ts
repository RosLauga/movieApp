import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string;
  @IsString()
  @MinLength(5)
  name: string;
  @IsString()
  @MinLength(5)
  lastname: string;
  @IsEmail()
  email: string;
  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 2,
    minUppercase: 2,
  })
  password: string;
}
