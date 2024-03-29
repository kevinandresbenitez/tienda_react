const path = require("path");

module.exports = {
  target: "node", // Set target to 'node' for server-side bundle,
  mode:"development",
  

  entry: {
    server: "./src/server/index.js", // Entry point for server-side bundle
  },
  output: {
    filename: "index.cjs", // Use dynamic name for output file based on entry point
    path: path.resolve(__dirname, "dist"), // Output directory
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel to transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  
  externals: {
    express: 'express',
  },
};