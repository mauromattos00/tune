import { Injectable } from '@angular/core';
import { VideoPlayerFacadeService } from '@tune/tune-state';
import {  Observable } from 'rxjs';

import { videoIdList } from 'video-ids';
import { VideoData } from '../interfaces/video-data';

@Injectable()
export class VideoPlayerService {
  currentVideoId$!: Observable<string>;

  constructor(private videoPlayerFacade: VideoPlayerFacadeService) {
    this.currentVideoId$ = this.videoPlayerFacade.selectCurrentVideoId();
  }

  public randomizeVideo() {
    const newVideoId = videoIdList[
      Math.floor(Math.random() * videoIdList.length)
    ];
    this.videoPlayerFacade.setVideoId(newVideoId);
  }

  public handlePlayerStateChange(event: YT.OnStateChangeEvent) {
    this.videoPlayerFacade.setVideoData(this.getVideoData(event));
  }

  private getVideoData(event: any): VideoData {
    return {
      author: event.target['playerInfo']['videoData']['author'],
      title: event.target['playerInfo']['videoData']['title'],
    }
  }
}
