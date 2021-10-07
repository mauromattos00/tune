import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { YouTubePlayerModule } from '@angular/youtube-player'

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, VideoPlayerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
