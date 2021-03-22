'use strict';

const Homey = require('homey');

class SettingDevice extends Homey.Device {
  async onInit() {
    this.log('SettingDevice:onInit');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings, newSettings, changedKeys }) {
    this.log('SettingDevice settings where changed');
  }
}

module.exports = SettingDevice;
