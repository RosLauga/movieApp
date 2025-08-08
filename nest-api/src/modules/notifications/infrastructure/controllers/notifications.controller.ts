import { Controller, Get } from '@nestjs/common';

@Controller('/trendings')
export class NotificationsController {
  @Get()
  getTrendings() {
    return 'Los trendings';
  }
}
