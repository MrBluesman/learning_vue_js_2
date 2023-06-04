module.exports = {
  presets: [
    // '@vue/app',
    '@vue/cli-plugin-babel/preset',
  ],
  env: {
    test: {
      plugins: [
        ['istanbul', {
          useInlineSourceMaps: false,
        }],
      ],
    },
  },
};
