module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: './src/components',
            screens: './src/screens',
            services: './src/sevices',
            src: './src',
          },
        },
      ],
    ],
  };
};
