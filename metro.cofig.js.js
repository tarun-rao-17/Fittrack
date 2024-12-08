const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  return {
    ...config,
    transformer: {
      ...config.transformer,
    },
    resolver: {
      ...config.resolver,
      assetExts: [...config.resolver.assetExts, 'ttf'],
    },
  };
})();
