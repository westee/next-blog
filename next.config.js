const withImages = require('next-images')
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ['s4.ax1x.com'],
  },
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config
  }
})