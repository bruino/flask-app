const path = require('path');
const webpack = require('webpack');


/*
 * Webpack Plugins
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const rootAssetPath = path.join(__dirname, 'assets');

module.exports = {
  // configuration
  context: __dirname,
  entry: {
    main_js: './assets/js/main',
    main_css: [
      path.join(__dirname, 'node_modules', '@tabler', 'core', 'dist', 'css', 'tabler.min.css'),
      path.join(__dirname, 'node_modules', '@tabler', 'icons', 'iconfont', 'tabler-icons.min.css'),
      path.join(__dirname, 'assets', 'css', 'style.css'),
    ],
  },
  output: {
    chunkFilename: "[id].js",
    filename: "[name].bundle.js",
    path: path.join(__dirname, "app", "static", "build"),
    publicPath: "/static/build/"
  },
  mode: 'development',
  resolve: {
    extensions: [".js", ".css"]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].bundle.css" }),
  ],
  module: {
    rules: [
     {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            },
          },
          'css-loader',
        ],
     },
     {  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
     {
        test: /\.(svg|ttf|eot)(\?.*)?$/i,
        loader: 'file-loader',
        options: { context: rootAssetPath, name: '[name].[ext]', outputPath: 'fonts' }
     },
     {
        test: /\.(png|jpe?g|gif|ico)(\?.*)?$/i,
        loader: 'file-loader',
        options: { context: rootAssetPath, name: '[name].[ext]', outputPath: 'img' }
     },      
    ],
  }
};
