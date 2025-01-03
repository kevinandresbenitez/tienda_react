const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: "node",
  mode:"development",

  entry: {
    server: "./src/server/index.ts", 
  },
  output: {
    filename: "index.cjs",
    path: path.join(process.cwd(), 'dist', 'server'),
    libraryTarget: 'commonjs'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },{
        test: /\.(css|less)$/i,
        use: 'null-loader',
      },
      {
        test: /\.svg$/,
        use: 'null-loader',
    },
    ],
  },
  
  externals: {
    express: 'express',
    typeorm: 'commonjs typeorm' 
  },
};