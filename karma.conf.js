// Karma configuration
// Generated on Thu Dec 21 2017 12:45:04 GMT+0100 (CET)
const webpack = require('./webpack.config');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    // This will be the new entry to webpack
    // so it should just be a single file
    files: ['src/app/index.tests.js'],

    // Preprocess test index and test files using
    // webpack (will run babel)
    preprocessors: {
      'src/app/index.tests.js': ['webpack'],
      'src/**/*.spec.js': ['webpack'],
    },

    // Reference webpack config (single object)
    // and configure some middleware settings
    webpack,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    // Typical Karma settings, see docs
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  });
};
