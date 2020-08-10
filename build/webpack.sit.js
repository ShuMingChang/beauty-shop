/**
 * 不须要醜化的 build config
 * 方便直接在浏览器上进行 debug
 */
module.exports = {
  /**
   * 链式操作 (高级)
   * 可参考
   * https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
   */
  chainWebpack: config => {
    config.devtool("source-map");

    config.output.filename("js/[name].[contenthash:8].js");
    config.output.chunkFilename("js/[name].[contenthash:8].js");

    config.optimization.delete("minimizer");
    config.optimization.delete("splitChunks");

    config.plugins.delete("optimize-css");
    config.plugins.delete("named-chunks");
    config.plugins.delete("hash-module-ids");
  }
};
