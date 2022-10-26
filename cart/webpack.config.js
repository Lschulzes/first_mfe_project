const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const WebpackCommon = require("../webpack.common.js");

module.exports = {
  mode: "development",
  ...WebpackCommon,
  devServer: {
    port: 8082,
  },
  output: {
    uniqueName: "cart",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/index",
      },
      shared: ["faker"],
    }),
  ],
};
