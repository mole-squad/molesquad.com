const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: OUTPUT_PATH
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(s)css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader', 
            { 
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './src/index.html', 
      filename: './index.html' 
    }),
    new ExtractTextPlugin('style.[hash].css')
  ],
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
