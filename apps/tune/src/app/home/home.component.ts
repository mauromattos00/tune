import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { VideoPlayerFacadeService } from '@tune/tune-state';
import { VideoData } from '@tune/video-player';

@Component({
  selector: 'tune-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videoId$!: Observable<string>;
  playerVars$!: Observable<YT.PlayerVars>;
  videoHeadings$!: Observable<VideoData | null>;

  constructor(private videoPlayerFacadeService: VideoPlayerFacadeService) { }

  ngOnInit(): void {
    this.setComponentVars();
  }

  private setComponentVars() {
    this.videoId$ = this.videoPlayerFacadeService.selectCurrentVideoId();
    this.playerVars$ = this.videoPlayerFacadeService.selectPlayerVars();
    this.videoHeadings$ = this.videoPlayerFacadeService.selectVideoData();
  }
}
