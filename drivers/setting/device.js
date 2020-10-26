'use strict';

const Homey = require('homey');

class SettingDevice extends Homey.Device {
  async onInit() {
    this.log('settingDevice:onInit');
    this.log('Name:', this.getName());
    this.log('Class:', this.getClass());


  }

}

module.exports = SettingDevice;
