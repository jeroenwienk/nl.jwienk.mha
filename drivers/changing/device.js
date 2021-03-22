'use strict';

const Homey = require('homey');

class ChangingDevice extends Homey.Device {
  async onInit() {
    this.log('changingDevice:onInit');
    this.log('Name:', this.getName());
    this.log('Class:', this.getClass());

    this.homey.setInterval(async () => {
      if (this.hasCapability('onoff')) {
        await this.removeCapability('onoff');
      } else {
        await this.addCapability('onoff');
      }
    }, 10000)


    this.homey.setInterval(async () => {
      await this.setCapabilityOptions('button', {
        title: {
          en: Math.random().toString()
        }
      })
    }, 8000)
  }

  async onCapabilityOnoff(value, opts) {}
}

module.exports = ChangingDevice;
