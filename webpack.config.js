const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');

const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');
const MODE = process.env.NODE_ENV.trim();
const IS_DEV = MODE === 'development';
const PUBLIC_PATH = IS_DEV ? '/' : '/soccer-stat/';
const TEMPLATE = path.join(SRC, IS_DEV ? 'index.dev.html' : 'index.prod.html');

module.exports = {
  mode: MODE,
  entry: '/src/index.tsx',
  output: {
    path: DIST,
    filename: 'js/bundle[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
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
        test: /\.css$/,
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
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(jpg|png|gif|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: TEMPLATE,
      publicPath: PUBLIC_PATH
    }),
    new CleanWebpackPlugin({
      root: DIST,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(SRC, 'assets/favicon'),
          to: path.join(DIST, 'favicon')
        },
        {
          from: path.join(SRC, '404.html'),
          to: path.join(DIST, '404.html')
        },
      ],
    }),
    new DefinePlugin({
      PUBLIC_PATH: JSON.stringify(PUBLIC_PATH)
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@assets': path.join(SRC, 'assets'),
      '@components': path.join(SRC, 'components'),
      '@constants': path.join(SRC, 'constants'),
      '@pages': path.join(SRC, 'pages'),
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