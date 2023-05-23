// Thanks for this tutorial:
// https://noisehack.com/generate-noise-web-audio-api/

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let bufferSize = 0;

const generateWhiteNoise = () => {
  bufferSize = 2 * audioContext.sampleRate;

  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);

  Array.from(Array(bufferSize))
    .forEach((_, i) => {
      output[i] = Math.random() * 2 - 1;
    });

  const noise = audioContext.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;
  noise.start(0);

  return noise;
};

const generatePinkNoise = () => {
  const bufferSize = 4096;

  return (() => {
    let b0 = 0.0;
    let b1 = 0.0;
    let b2 = 0.0;
    let b3 = 0.0;
    let b4 = 0.0;
    let b5 = 0.0;
    let b6 = 0.0;
    const node = audioContext.createScriptProcessor(bufferSize, 1, 1);

    node.onaudioprocess = (e) => {
      const output = e.outputBuffer.getChannelData(0);

      Array.from(Array(bufferSize))
        .forEach((_, i) => {
          const white = Math.random() * 2 - 1;

          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;

          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.11; // (roughly) compensate for gain

          b6 = white * 0.115926;
        });
    };

    return node;
  })();
};

const generateBrownNoise = () => {
  const bufferSize = 4096;

  return (() => {
    let lastOut = 0.0;
    const node = audioContext.createScriptProcessor(bufferSize, 1, 1);

    node.onaudioprocess = (e) => {
      const output = e.outputBuffer.getChannelData(0);

      Array.from(Array(bufferSize))
        .forEach((_, i) => {
          const white = Math.random() * 2 - 1;

          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5; // (roughly) compensate for gain
        });
    };

    return node;
  })();
};

export default {
  install: (Vue) => {
    Vue.directive('noise', (value) => {
      let noise = generateWhiteNoise();

      switch (value) {
        case 'pink': {
          noise = generatePinkNoise();
          break;
        }
        case 'brown': {
          noise = generateBrownNoise();
          break;
        }
        default:
      }

      noise.connect(audioContext.destination);
      audioContext.suspend();
    });

    Vue.noise = {
      start: () => {
        audioContext.resume();
      },
      pause: () => {
        audioContext.suspend();
      },
      stop: () => {
        audioContext.suspend();
      }
    };
  },
};
