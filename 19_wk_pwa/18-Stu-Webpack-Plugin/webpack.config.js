const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  // Update the entry point
  entry: './public/assets/js/app.js',
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  mode: 'production',
  plugins: [
    new WebpackPwaManifest({
      name: 'My Web Pack Image PWA',
      short_name: 'WebPackImagePWA',
      description:
        'My awesome Web Pack auto generated Image Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      inject: false,
      fingerprints: false,
      icons: [
        {
          src: path.resolve(
            __dirname,
            'public/assets/images/icons/icon-512x512.png'
          ),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512], // multiple sizes
        },
      ],
    }),
  ],
};

module.exports = config;
