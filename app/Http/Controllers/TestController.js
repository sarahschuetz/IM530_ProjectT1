'use strict'

class TestController {

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

module.exports = new TestController()
