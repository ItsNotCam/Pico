const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = "development";
const entry = "./src/index.ts";

module.exports = {
  mode: mode,
  entry: entry,

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },

  plugins: [new MiniCssExtractPlugin()],

  // watch: mode === "development",
};
