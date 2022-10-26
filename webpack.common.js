module.exports = {
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: {
      index: "index.html",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
};
