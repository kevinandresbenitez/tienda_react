const path = require("path");

module.exports = {
  target: "node",
  mode:"development",
  

  entry: {
    server: "./src/server/index.tsx", 
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
            ]
          }
        }
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      }
    ],
  },
  
  externals: {
    express: 'express',
  },
};