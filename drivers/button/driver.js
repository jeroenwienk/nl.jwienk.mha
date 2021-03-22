'use strict';

const Homey = require('homey');
const {v4: uuid} = require('uuid');

class ButtonDriver extends Homey.Driver {
  async onInit() {
    this.log('buttonDriver:onInit');
  }

  async onPairListDevices() {
    this.log('buttonDriver:onPairListDevices');

    return [
      {
        name: 'Button',
        data: {
          id: uuid(),
        },
      },
    ];
  }
}

module.exports = ButtonDriver;
