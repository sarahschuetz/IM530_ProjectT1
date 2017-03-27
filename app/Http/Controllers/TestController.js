'use strict'

const Env = use('Env')
const Config = use('Config')
const Nuxt = require('nuxt')

class NuxtController {

  constructor () {
    let config = Config.get('nuxt')
    config.dev = Env.get('NODE_ENV') === 'development'
    this.nuxt = new Nuxt(config)
    if (Env.get('NODE_ENV') === 'development') {
      this.nuxt.build()
    }
  }

  * test (request, response) {
    const data = {test: 'Hallo Sarah'};
    response.json(data);
  }

  * getCats (request, response) {
    
    var cats = [{
      name: 'Casimir',
      age: 9
    }, {
      name: 'Whiskers',
      age: 2
    }, {
      name: 'Oreo',
      age: 1
    }];

    response.json(cats);
  }
}

module.exports = new NuxtController()
