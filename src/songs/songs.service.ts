import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSongDTO } from './dto/create-song-dto';
import { Song, SongDocument } from './schemas/song';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) //1
    private readonly songModel: Model<SongDocument>, //2
  ) {}
  async create(createSongDTO: CreateSongDTO): Promise<Song> {
    const song = await this.songModel.create(createSongDTO); //3.
    return song;
  }
}
