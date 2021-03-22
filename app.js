'use strict';

const Homey = require('homey');

if (process.env.DEBUG === '1') {
  require('inspector').open(9229, '0.0.0.0', false);
}

class App extends Homey.App {
  async onInit() {}
}

module.exports = App;
