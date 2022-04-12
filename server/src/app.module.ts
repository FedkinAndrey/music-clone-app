import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://fedkin17:maybeshewill17@cluster-music.vyf2a.mongodb.net/music-app?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
