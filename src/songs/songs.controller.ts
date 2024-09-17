import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Song } from './schemas/song';
import { UpdateSongDTO } from './dto/update-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(
    @Body()
    createSongDTO: CreateSongDTO,
  ) {
    return this.songService.create(createSongDTO);
  }

  @Get()
  find(): Promise<Song[]> {
    return this.songService.find();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ): Promise<Song> {
    return this.songService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDTO: UpdateSongDTO) {
    return this.songService.update(id, updateSongDTO);
  }

  @Delete(':id')
  delete(
    @Param('id')
    id: string,
  ) {
    return this.songService.delete(id);
  }
}
