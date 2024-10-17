const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.bundle.js",
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // base html
      inject: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      configs: path.resolve(__dirname, "./configs/"),
      common: path.resolve(__dirname, "./src/common/"),
      assets: path.resolve(__dirname, "./src/assets/"),
      test: path.resolve(__dirname, "./src/test/"),
      src: path.resolve(__dirname, "./src/"),
      react: path.resolve(__dirname, "./node_modules/react"),
    },
  },
};

// module.exports = {
//   entry: "/src/index.js", // main js
//   output: {
//     path: path.resolve(__dirname, "dist"), // output folder
//     publicPath: "/",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [
//           "style-loader",
//           "css-loader", // for styles
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html", // base html
//     }),
//   ],
// };
