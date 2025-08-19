import { IsBoolean, IsString, MinLength } from 'class-validator';

export class createNotificationDto {
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
