import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VideoPlayerModule } from '@tune/video-player';
import { TuneStateModule } from '@tune/tune-state';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VideoPlayerModule,
    AppRoutingModule,
    HomeModule,
    TuneStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
