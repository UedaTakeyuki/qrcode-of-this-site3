module.exports = {
/*  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }*/
  chainWebpack: (config) => {
    // https://qiita.com/uturned0/items/5fdf2d92548274fe56e3
    // https://rinoguchi.net/2020/05/vue-firebase-reduce-bundle-size.html
    // https://stackoverflow.com/questions/66179210/how-to-externalize-a-lib-with-vue-cli
      config.externals({
        vue: 'Vue',
        vuetify: 'Vuetify',
        'qrcode-of-this-site3': 'qrcode-of-this-site3',
  //      'vuetify/lib': 'Vuetify',
      })
    }
}
