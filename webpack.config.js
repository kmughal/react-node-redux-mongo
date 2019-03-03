const path = require("path");
var entryPath = path.join(__dirname, 'src','client', 'index.jsx');

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: entryPath,
  // optimization: {
  //   splitChunks: {
  //    chunks : "all"
  //   }
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
};