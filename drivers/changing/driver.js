'use strict';

const Homey = require('homey');
const { v4: uuid } = require('uuid');

class ChangingDriver extends Homey.Driver {
  async onInit() {
    this.log('changingDriver:onInit');
  }

  async onPairListDevices() {
    this.log('changingDriver:onPairListDevices');

    return [
      {
        name: 'Changing',
        data: {
          id: uuid(),
        },
      },
    ];
  }
}

module.exports = ChangingDriver;
