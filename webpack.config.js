module.exports = {
  entry: [
    './public/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    contentBase: './',
    port: 3000,
    headers: { "Access-Control-Allow-Origin": "*" },
    changeOrigin: true
  },
  externals: {
    'Config': JSON.stringify(require('./config/config.json')),
    'Styles': JSON.stringify(require('./style/css/materialStyles.json'))
  }
};