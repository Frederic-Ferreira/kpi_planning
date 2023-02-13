import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {
    return;
  }

  @Get()
  getHello(): string {
    return 'HELLO';
  }
}
