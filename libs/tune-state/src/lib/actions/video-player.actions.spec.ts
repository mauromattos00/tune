import * as fromVideoPlayer from './video-player.actions';

describe('randomizeVideo', () => {
  it('should return an action', () => {
    expect(fromVideoPlayer.randomizeVideo().type).toBe(
      '[VideoPlayer] Randomize Video');
  });
});
