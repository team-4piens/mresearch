module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/mresearch' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/mresearch' : '',
    env: {
        BACKEND_URL: process.env.NODE_ENV === 'production' ? '/mresearch' : '',
    }
}