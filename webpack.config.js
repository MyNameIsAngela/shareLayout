module.exports = {
    entry: './index.js',
    devtool: 'cheap-source-map',
    output: {
      filename: 'dist/bundle.js',
      publicPath: ''
    }, node: {
        fs: 'empty'
    },
    module: {
      loaders: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                //以下内容已存放于.babelrc中
                options: {
                    presets: [
                        "env", "react"
                    ]
                }
            },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader'],
        },
        {
            test: /\.(jpg|png|jpeg|gif)$/,
            use: ['url-loader'],
        }
      ]
    }
  }
  