module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          assets: './src/assets',
          screens: './src/screens',
          hooks: './src/hooks',
          utils: './src/utils',
          types: './src/types',
        },
      },
    ],
  ],
};
