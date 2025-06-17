const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer");
const mode = "development";

const config = {
  name: "KSWWebsite",
  mode: mode === "development" ? "development" : "production",
  devtool: mode === "development" ? "inline-source-map" : "hidden-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles")
    }
  },
  entry: {
    app: "./src/index"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: mode === "development"
              }
            ],
            "@babel/preset-react",
            "@babel/preset-typescript"
          ],
          env: {
            development: {},
            production: {}
          }
        },
        exclude: path.join(__dirname, "node_modules")
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: mode === "development" ? "development" : "production" })
  ],
  output: {
    path: path.join(__dirname, "public/dist"),
    filename: "app.js",
    publicPath: "/dist/"
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public")
    },
    proxy: {
      "/": "http://localhost"
    }
  }
};

if (mode === "development" && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
  config.plugins.push(new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "server", openAnalyzer: false }));
  config.module.rules[0].options.env.development.plugins = [["@emotion/babel-plugin", { sourceMap: true }], require.resolve("react-refresh/babel")];
}

if (mode === "production" && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  config.plugins.push(new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }));
  config.module.rules[0].options.env.production.plugins = ["@emotion/babel-plugin"];
}

module.exports = config;
