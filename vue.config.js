const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/one-a-day/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_global.scss";
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
})
