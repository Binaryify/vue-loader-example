var config = require('./webpack.base.config')

config.devtool = '#source-map'

config.devServer = {
  noInfo: true
}

module.exports = config
