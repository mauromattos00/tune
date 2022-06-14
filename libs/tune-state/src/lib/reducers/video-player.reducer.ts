import { createReducer, on } from '@ngrx/store';
import { VideoData } from '@tune/video-player';
import * as VideoPlayerActions from '../actions/video-player.actions';

export const videoPlayerFeatureKey = 'videoPlayer';

export interface VideoPlayerState {
  videoId: string;
  playerVars: YT.PlayerVars;
  videoData: VideoData | null;
}

export const initialState: VideoPlayerState = {
  videoId: '',
  playerVars: {},
  videoData: null,
};

export const reducer = createReducer(
  initialState,
  on(VideoPlayerActions.setVideoData, (state, { data }): VideoPlayerState => ({
    ...state,
    videoData: data,
  })),
  on(VideoPlayerActions.setPlayerVars, (state, { playerVars }): VideoPlayerState => ({
    ...state,
    playerVars,
  })),
  on(VideoPlayerActions.setPlayerVideoId, (state, { id }): VideoPlayerState => ({
    ...state,
    videoId: id,
  })),
);
