module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devtool: "source-map",
};
