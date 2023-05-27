let lofiMusic;
const defaultMp3Src = '/sleepy-cat-118974.mp3';

lofiMusic = new Audio(defaultMp3Src);
lofiMusic.muted = true;

export default {
  install: (Vue) => {
    Vue.directive('lofi', (_, { value }) => {
      if (value) {
        lofiMusic = new Audio(value);

        lofiMusic.currentTime = 0;
        lofiMusic.pause();
        lofiMusic.muted = true;
      }
    })

    Vue.lofi = {
      start: () => {
        lofiMusic.muted = false;
        lofiMusic.play();
      },
      pause: () => {
        lofiMusic.muted = true;
        lofiMusic.pause();
      },
      stop: () => {
        lofiMusic.currentTime = 0;
        lofiMusic.muted = true;
        lofiMusic.pause();
      }
    }
  }
}
