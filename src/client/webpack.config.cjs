const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:{
    main:{
      import:'./src/client/app.tsx',
      dependOn:'shared'
    },
    shared:['react',"@fortawesome/fontawesome-svg-core","@fortawesome/free-solid-svg-icons","@fortawesome/react-fontawesome"]
  },


  optimization: {
    runtimeChunk: 'single',
  },



  mode:"production",
  output: {
    path: path.join(process.cwd(), 'dist', 'client'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
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
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      }
    ],
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nombre del archivo CSS separado
    }),
  ],
};
