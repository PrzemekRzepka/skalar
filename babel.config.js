module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@keyboard': './src/keyboard',
          '@store': './src/store',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
