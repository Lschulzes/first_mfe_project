const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const WebpackCommon = require("../webpack.common.js");

module.exports = {
  mode: "development",
  ...WebpackCommon,
  devServer: {
    port: 8081,
  },
  output: {
    uniqueName: "products",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/bootstrap",
      },
      shared: ["faker"],
    }),
  ],
};
