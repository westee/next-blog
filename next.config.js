module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpg|png)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            output: 'static',
            publicPath: '_next/static'
          }
        },
      ],
    })

    return config
  }
}
