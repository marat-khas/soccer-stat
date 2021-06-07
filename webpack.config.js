const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: DIST,
    filename: 'bundle[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(SRC, 'index.html'),
    }),
    new CleanWebpackPlugin({
      root: DIST,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@components': path.join(SRC, 'components'),
      '@constants': path.join(SRC, 'constants'),
      '@services': path.join(SRC, 'services'),
      '@styles': path.join(SRC, 'styles'),
      '@utilities': path.join(SRC, 'utilities'),
    },
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
};