'use strict';

const Homey = require('homey');
const { v4: uuid } = require('uuid');

class SettingDriver extends Homey.Driver {
  async onInit() {
    this.log('SettingDriver:onInit');
  }

  async onPairListDevices() {
    this.log('SettingDriver:onPairListDevices');

    return [
      {
        name: 'Settings Device',
        data: {
          id: uuid(),
        },
      },
    ];
  }
}

module.exports = SettingDriver;
