const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');

const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.tsx',
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
      template: path.join(SRC, 'index.html'),
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
      ],
    }),
    new DefinePlugin({
      'IS_DEV': process.env.NODE_ENV.trim() === 'development',
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