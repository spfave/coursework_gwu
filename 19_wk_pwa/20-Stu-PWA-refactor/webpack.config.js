const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  mode: 'development',
  entry: './public/assets/js/app.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new WebpackPwaManifest({
      name: 'Images App',
      short_name: 'Images App',
      description: 'An application for images',
      background_color: '#01579b',
      theme_color: '#ffffff',
      'theme-color': '#ffffff',
      start_url: '/',
      inject: false,
      fingerprints: false,
      icons: [
        {
          src: path.resolve(
            __dirname,
            'public/assets/images/icons/icon-512x512.png'
          ),
          sizes: [72, 96, 128, 144, 153, 192, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
  // add configuration to use babel-loader here
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
module.exports = config;
