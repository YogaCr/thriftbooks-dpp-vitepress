module.exports = {
    chainWebpack: config => {
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')
    },
    build: {
        rollupOptions: {
            // https://rollupjs.org/guide/en/#big-list-of-options
        }
    }
};
