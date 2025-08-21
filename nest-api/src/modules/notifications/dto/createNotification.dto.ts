import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateNotificationDto {
  id: string;
  @IsString()
  @MinLength(5)
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  readed: boolean;
  @IsString()
  userId: string;
}
