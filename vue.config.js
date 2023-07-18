

const publicPath = process.env.NODE_ENV === 'production'
? '/schools-ui/'
: '/';
console.log(publicPath);

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath
})
