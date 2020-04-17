module.exports = {
  configurewebpack: {
    // 别名的配置
    resolve: {
      // extensions: ['.js', '.vue', '.json'],//省略后缀，webpack已配置，这里不用，除非添加新的
      alias: {
        '@': resolve('src'),
        'assets': resolve('@/assets'),
        'common': resolve('@/common'),
        'components': resolve('@/components'),
        'network': resolve('@/network'),
        'views': resolve('@/views')
      }
    }
  }
}