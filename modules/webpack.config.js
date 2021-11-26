const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require('./package.json').dependencies

module.exports = {
  entry: "./src/graph1",
  mode: "development",
  cache: false,

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3001/graph1/",
    path: path.resolve(__dirname, "dist/graph1"),
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "graph1",
      library: { type: "var", name: "graph1" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        graph1: "./src/graph1",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-redux": {
          singleton: true,
          requiredVersion: deps["react-redux"],
        },
        "@emotion/core": {
          singleton: true,
          requiredVersion: deps["@emotion/core"],
        },
        "emotion-theming": {
          singleton: true,
          requiredVersion: deps["emotion-theming"],
        },
        "nectar-ui": {
          singleton: true,
          requiredVersion: deps["aurumsoftware/nectar-ui#v0.0.29"],
        }
      },
    })
  ],
};