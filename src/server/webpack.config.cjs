const path = require("path");

module.exports = {
  target: "node",
  mode:"development",
  

  entry: {
    server: "./src/server/index.tsx", 
  },
  output: {
    filename: "index.cjs",
    path: path.resolve(__dirname, "dist"), // Output directory
    libraryTarget: 'commonjs'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
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
      }
    ],
  },
  
  externals: {
    express: 'express',
  },
};