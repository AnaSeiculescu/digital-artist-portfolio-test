import {
  Controller,
  Get,
  Query,
  Patch,
  Param,
  Body,
  Post,
  Delete,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Directory where files will be saved
        filename: (req, file, callback) => {
          const filename = `${Date.now()}${extname(file.originalname)}`;
          callback(null, filename);
          // const uniqueSuffix =
          //   Date.now() + '-' + Math.round(Math.random() * 1e9);
          // const ext = extname(file.originalname);
          // callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('File received:', file);
    if (!file) {
      console.error('No file received');
      throw new BadRequestException('File not uploaded');
    }
    console.log('File details:', {
      originalname: file.originalname,
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
    });
    return {
      message: 'File uploaded successfully',
      filename: file.filename,
    };
  }
}
