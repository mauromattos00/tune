import { createSelector, createFeatureSelector } from '@ngrx/store';
import { VideoPlayerState } from './../reducers/video-player.reducer';

export const selectVideoPlayerFeature = createFeatureSelector<VideoPlayerState>('videoPlayer');

export const selectCurrentVideoId = createSelector(
  selectVideoPlayerFeature,
  (state: VideoPlayerState) => state.videoId,
);

export const selectVideoPlayerVars = createSelector(
  selectVideoPlayerFeature,
  (state: VideoPlayerState) => state.playerVars,
);

export const selectVideoData = createSelector(
  selectVideoPlayerFeature,
  (state: VideoPlayerState) => state.videoData,
);
