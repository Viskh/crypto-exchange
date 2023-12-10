const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const SRC_DIR = path.join(__dirname, "./src");

const ALIAS = {
  src: `${SRC_DIR}`,
  pages: `${SRC_DIR}/pages`,
  components: `${SRC_DIR}/components`,
  styles: `${SRC_DIR}/styles`,
  images: `${SRC_DIR}/images`,
  api: `${SRC_DIR}/api`,
  store: `${SRC_DIR}/store`,
  hooks: `${SRC_DIR}/hooks`,
};

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  target: "web",
  resolve: {
    alias: ALIAS,
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      url: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv({
      path: "./.env",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  mode: "development",
};
