const withImages = require('next-images')
module.exports = withImages({
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    env: {
        BACKEND_URL: process.env.NODE_ENV === 'production' ? '' : '',
    },
})