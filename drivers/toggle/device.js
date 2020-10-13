'use strict';

const Homey = require('homey');

class ToggleDevice extends Homey.Device {
  async onInit() {
    this.log('toggleDevice:onInit');
    this.log('Name:', this.getName());
    this.log('Class:', this.getClass());

    this.registerCapabilityListener('onoff', this.onCapabilityOnoff.bind(this));
  }

  async onCapabilityOnoff(value, opts) {}
}

module.exports = ToggleDevice;
