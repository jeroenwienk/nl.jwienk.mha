'use strict';

const Homey = require('homey');
const { v4: uuid } = require('uuid');

class SettingDriver extends Homey.Driver {
  async onInit() {
    this.log('settingDriver:onInit');
  }

  async onPairListDevices() {
    this.log('settingDriver:onPairListDevices');

    return [
      {
        name: 'Setting',
        data: {
          id: uuid(),
        },
      },
    ];
  }
}

module.exports = SettingDriver;
