module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    HOST:
      "https://result.eolinker.com/RBGmSc73fdc6924e03a6e482d7833d84e51ae758ed9e8bd?uri="
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
};
