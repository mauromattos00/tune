import { Component, OnInit } from '@angular/core';
import { VideoPlayerFacadeService } from '@tune/tune-state';

@Component({
  selector: 'mauromattos00-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private videoPlayerFacade: VideoPlayerFacadeService) { }

  ngOnInit(): void {
    this.setInitialPlayerVars();
    this.videoPlayerFacade.randomizeVideo();
  }

  private setInitialPlayerVars(): void {
    this.videoPlayerFacade.setPlayerVars({
      autoplay: 1,
      color: 'white',
      autohide: 1,
      controls: 1,
      showinfo: 1,
    });
  }
}
