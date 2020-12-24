const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve('./node_modules'), path.resolve('./')],
    };
    return config;
  },
  i18n: {
    locales: ['en', 'fr', 'np'],
    defaultLocale: 'en',
  },
}
