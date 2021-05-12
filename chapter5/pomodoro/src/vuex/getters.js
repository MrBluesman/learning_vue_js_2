export default {
  isStarted: state => state.started,
  isPaused: state => state.paused,
  isStopped: state => state.stopped,
  isWorking: state => state.isWorking,
  getMinutes: state => Math.floor(state.counter / 60),
  getSeconds: state => state.counter % 60,
  getCatImgSrc: state => state.catImgSrc,
  getTimestamp: state => state.timestamp,
};
