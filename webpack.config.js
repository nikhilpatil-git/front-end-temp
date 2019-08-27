const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//   entry: './src/index',
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.js'
//   },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
// module.exports = {
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader"]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html"
//     }),
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     })
//   ],
//   optimization: {
//     minimize: true
//   }
// };