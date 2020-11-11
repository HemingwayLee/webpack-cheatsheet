module.exports = {
  entry: './src/index.js',
  module: {
    // Use `css-loader` and `style-loader` on any file that ends in '.css'
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }
        ]
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: `${process.cwd()}/dist`,
  }
};

