import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from 'src/songs/schemas/song';
import { Album, AlbumDocument } from './schemas/album.schema';
import { CreateAlbumDTO } from './dto/create-album-dto';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name)
    private readonly albumModel: Model<AlbumDocument>,
  ) {}

  async createAlbum(createAlbumDTO: CreateAlbumDTO): Promise<Album> {
    return this.albumModel.create(createAlbumDTO);
  }
  async findAlbums() {
    return this.albumModel.find().populate('songs', null, Song.name); //1
  }
}
