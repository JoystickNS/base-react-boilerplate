const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new ReactRefreshPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["react-refresh/babel"],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 5000,
    open: true,
    hot: true,
  },
  performance: {
    hints: false,
  },
};
