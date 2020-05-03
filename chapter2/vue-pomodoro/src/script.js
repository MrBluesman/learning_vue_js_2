const POMODORO_STATES = {
  WORK: 'work',
  REST: 'rest',
};
const STATES = {
  STARTED: 'started',
  STOPPED: 'stopped',
  PAUSED: 'paused',
};
const WORKING_TIME_LENGTH_IN_MINUTES = 1;
const RESTING_TIME_LENGTH_IN_MINUTES = 5;

new Vue({
  el: '#app',
  data: {
    state: STATES.STOPPED,
    minute: WORKING_TIME_LENGTH_IN_MINUTES,
    second: 0,
    pomodoroState: POMODORO_STATES.REST,
    tickInterval: null,
    imageInterval: null,
    imageUrl: null,
  },
  computed: {
    title: function () {
      return this.pomodoroState === POMODORO_STATES.WORK ? 'Work!' : 'Rest!';
    },
    min: function () {
      return this.leftPad(this.minute);
    },
    sec: function () {
      return this.leftPad(this.second);
    },
    isRestingTime: function () {
      return this.pomodoroState === POMODORO_STATES.REST;
    },
  },
  methods: {
    start: function () {
      this.state = STATES.STARTED;
      this._tick();
      this.tickInterval = setInterval(this._tick, 1000);
      this.getCatImage();

      // If state has been switched to resting time,
      // start interval for display cats
      this.setCatImageInterval();
    },
    pause: function () {
      this.state = STATES.PAUSED;

      clearInterval(this.tickInterval);
      clearInterval(this.imageInterval);
      this.imageInterval = null;
    },
    stop: function () {
      this.state = STATES.STOPPED;

      clearInterval(this.tickInterval);
      clearInterval(this.imageInterval);
      this.imageInterval = null;

      this.pomodoroState = POMODORO_STATES.WORK;
      this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
      this.second = 0;
    },
    _tick: function () {
      // if second is not 0, just decrement second
      if (this.second > 0) {
        this.second--;
        return;
      }

      // if second is 0 and minute is not 0,
      // decrement minute and set second to 59
      if (this.minute > 0) {
        this.minute--;
        this.second = 59;
        return;
      }

      // if second is 0 and minute is 0,
      // toggle working/resting intervals
      this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK
        ? POMODORO_STATES.REST
        : POMODORO_STATES.WORK;

      this.minute = this.pomodoroState === POMODORO_STATES.WORK
        ? WORKING_TIME_LENGTH_IN_MINUTES
        : RESTING_TIME_LENGTH_IN_MINUTES;

      // If state has been switched to resting time,
      // start interval for display cats
      this.setCatImageInterval();
    },
    leftPad: function (value) {
      return value < 10 ? '0' + value : value;
    },
    setCatImageInterval: function () {
      if (this.isRestingTime && !this.imageInterval) {
        this.imageInterval = setInterval(this.getCatImage, 5000);
      } else {
        clearInterval(this.imageInterval);
        this.imageInterval = null;
      }
    },
    getCatImage: function () {
      const request = new XMLHttpRequest();

      request.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
      request.setRequestHeader('x-api-key', '88fa2ba1-4cd3-4381-a238-1f58016a0144');
      request.send();

      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            this.imageUrl = JSON.parse(request.response)[0].url;
          }
        }
      };
    }
  }
});
