const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  mode:"development",

  entry: {
    server: "./src/server/index.ts", 
  },
  output: {
    filename: "index.mjs",
    path: path.join(process.cwd(), 'dist', 'server'),
    libraryTarget: 'module',
    module: true,
    chunkFormat: "module",
    clean:false
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

   experiments: {
    outputModule: true,
  },

  externals: [
      nodeExternals({
        importType: 'module',
        allowlist: [/\.(css|less|scss|sass)$/],
      }),
    ],

    watchOptions: {
      poll: 1000,
      ignored: /node_modules|dist/,
    },

    plugins:[
      new NodemonPlugin({
      script: './dist/server/index.mjs',
      watch: path.resolve('./dist/server'),
      legacyWatch: true,
      ext: 'js,mjs,json',
      delay: 50, 
      verbose: false
      }),
    ]
};