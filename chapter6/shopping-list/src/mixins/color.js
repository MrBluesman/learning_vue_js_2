export default {
  methods: {
    hexToRgb: (hex) => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16))
      .join(', '),
    opacityBackground(hex, opacity = '.1') {
      return hex ? `rgba(${this.hexToRgb(hex)}, ${opacity})` : `rgba(10, 20, 30, ${opacity})`;
    },
  },
};
