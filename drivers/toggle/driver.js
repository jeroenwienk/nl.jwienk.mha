'use strict';

const Homey = require('homey');
const { v4: uuid } = require('uuid');

class ToggleDriver extends Homey.Driver {
  async onInit() {
    this.log('toggleDriver:onInit');
  }

  async onPairListDevices() {
    this.log('toggleDriver:onPairListDevices');

    return [
      {
        name: 'Toggle',
        data: {
          id: uuid(),
        },
      },
    ];
  }
}

module.exports = ToggleDriver;
