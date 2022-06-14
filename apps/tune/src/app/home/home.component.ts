import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { VideoPlayerFacadeService } from '@tune/tune-state';

@Component({
  selector: 'mauromattos00-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videoId$!: Observable<string>;
  playerVars$!: Observable<YT.PlayerVars>;

  constructor(private videoPlayerFacadeService: VideoPlayerFacadeService) { }

  ngOnInit(): void {
    this.setComponentVars();
  }

  private setComponentVars() {
    this.videoId$ = this.videoPlayerFacadeService.selectCurrentVideoId();
    this.playerVars$ = this.videoPlayerFacadeService.selectPlayerVars();
  }
}
