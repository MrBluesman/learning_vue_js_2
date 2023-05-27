let lofiMusic;
const defaultMp3Src = '/sleepy-cat-118974.mp3';

export default {
  install: (Vue) => {
    Vue.directive('lofi', (_, {value}) => {
      lofiMusic = new Audio(value || defaultMp3Src);
      lofiMusic.muted = true;
    })

    Vue.lofi = {
      start: () => {
        lofiMusic.muted = false;
        lofiMusic.play();
      },
      pause: () => {
        lofiMusic.pause();
      },
    }
  }
}
