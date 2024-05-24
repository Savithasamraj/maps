const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    extraNodeModules: {
      'reanimated-bottom-sheet': path.resolve(__dirname, 'node_modules/reanimated-bottom-sheet'),
    },
    sourceExts: [...defaultConfig.resolver.sourceExts, 'ts', 'tsx'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
