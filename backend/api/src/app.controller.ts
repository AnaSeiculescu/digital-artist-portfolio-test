import {
  Controller,
  Get,
  Query,
  Patch,
  Param,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/artworks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all')
  getAllWork(@Query() query) {
    console.log('acest query: ', query);
    // if (query.is_visible === 'true')
    return this.appService.getAllArtwork(query.is_visible === 'true');
  }

  // @Get('/visible')
  // getIsVisibleArtWork() {
  //   return this.appService.getIsVisibleWork();
  // }

  @Post('/')
  createArtwork(@Body() data: any) {
    return this.appService.createArtwork(data);
  }

  @Patch('/:id')
  updateArtwork(@Param('id') id: number, @Body() data: any) {
    return this.appService.updateArtwork(id, data);
  }

  @Delete('/:id')
  deleteArtwork(@Param('id') id: number) {
    return this.appService.deleteArtwork(id);
  }
}
