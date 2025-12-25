const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode:"development",

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



  mode:"development",
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
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
              additionalData: `@import "${path.resolve(__dirname, 'vars.less')}";`,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'imgs/',
                },
            },
        ],
    },
    ],
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],

   watchOptions: {
    poll: 1000,
    ignored: /node_modules|dist|src\/server/,
  },
};
