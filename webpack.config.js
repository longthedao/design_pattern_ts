const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var subHtmlFiles = [];
const srcItems = fs.readdirSync(path.join(__dirname, 'src'));

srcItems.forEach((item) => {
  const file = fs.lstatSync(path.resolve('./src', item));
  if (file.isDirectory()) {
    subHtmlFiles.push(item);
  }
});

const htmlParser = subHtmlFiles.map(
  (file) =>
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `src/${file}/${file}.html`),
      filename: path.resolve(__dirname, `dist/${file}/${file}.html`),
    })
);

module.exports = {
  entry: {
    bundle: './src/index.ts',
    // observer: './src/observer/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: './dist',
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ].concat(htmlParser),
  devtool: 'source-map',
};
