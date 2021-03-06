'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'purr, purr, purr!',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Open+Sans:300,400,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },

  build: {
    vendor: ['axios']
  },
  
  /*
  ** Global CSS
  */
  css: ['~static/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffafbd' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}
