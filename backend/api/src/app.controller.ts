import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/artworks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/randomnumber')
  getRandom(): string {
    return this.appService.getHello();
  }

  @Get('/all')
  getAllWork() {
    return this.appService.getAllArtwork();
  }
}
