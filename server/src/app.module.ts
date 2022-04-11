import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://fedkin17:maybeshewill17@cluster-music.vyf2a.mongodb.net/music-app?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}