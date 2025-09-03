import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class UpdateNotificationDto {
  @IsString()
  id: string;
  @IsBoolean()
  readed: boolean;
  @IsUUID()
  userId: string;
}
