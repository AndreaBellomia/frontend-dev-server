const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');


module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'src'),
      watch: true,
      staticOptions: {
        files: ['*.html'],
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.min.css', 
    }),

    ...glob.sync('./src/**/*.html').map((htmlFile) => {
      return new HtmlWebpackPlugin({
        template: htmlFile,
        filename: path.basename(htmlFile),
        inject: 'head',
        scriptLoading: 'defer',
      });
    }),
    
  ],
};
