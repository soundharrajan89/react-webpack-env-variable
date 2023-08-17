const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const config = require('./public/config'); 


module.exports = {

  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"]
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },

      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      REACT_APP_NAME: JSON.stringify("LTTS Static variable"), // Expose config.js variables
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: '' // can modify `static` to another name or get it from `process`
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
};
