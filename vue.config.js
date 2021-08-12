module.exports = {
  publicPath: '/',//服务器部署文件夹名 默认根目录
  devServer: {
    host: process.env.VUE_APP_DEV_HOST,
    port: process.env.VUE_APP_MAIN_PORT,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_DEV_SERVER, //这里是目标服务器地址
        ws: true, //是否支持websocket协议
        changeOrigin: true, // //是否改变源地址
        pathRewrite: { //路径重写
          '^/api': '', //这里一定要为空
        },
      },
    }
  },
}