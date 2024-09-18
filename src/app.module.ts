import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pieash9:nVoDIXXg0nKuhJMX@cluster0.2au1tbt.mongodb.net/spotify-clone?retryWrites=true&w=majority',
      {
        connectTimeoutMS: 10000, // Timeout after 10 seconds
        retryWrites: true,
      },
    ),
    SongsModule,
    AlbumsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
