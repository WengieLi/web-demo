// const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

console.log('当前构建环境：', process.env.VUE_APP_TYPE);

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  css: {
    sourceMap: true
  },
  // productionSourceMap:false,
  devServer: {
    disableHostCheck: true,
    port: 99,
    hot: true
  },
  outputDir: `./dist/${process.env.VUE_APP_TYPE || 'prd'}/`,
  publicPath:process.env.VUE_APP_TYPE == 'prd'? `//static.centanet.com/axp/`:undefined,
  filenameHashing:true,// process.env.VUE_APP_TYPE === 'prd' ? true : false,
  configureWebpack: {
    externals: {
      vue: 'Vue'
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@common', resolve('common'))
      .set('@filters', resolve('filters'))
      .set('@views', resolve('src/views'));
  }
};
