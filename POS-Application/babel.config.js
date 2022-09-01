module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],







    // in last
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};
