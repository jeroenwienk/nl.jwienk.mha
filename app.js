'use strict';

const Homey = require('homey');

if (process.env.DEBUG === '1') {
  require('inspector').open(9229, '0.0.0.0', false);
}

class App extends Homey.App {
  async onInit() {
    this.log('app:onInit');

    this.homey.flow
      .getActionCard('optional')
      .registerRunListener(async (args, state) => {
        console.log(args);
        console.log(state);

        return true;
      });

    this.homey.flow
      .getActionCard('duration')
      .registerRunListener(async (args, state) => {
        console.log(args);
        console.log(state);

        return true;
      });

    this.homey.flow
      .getActionCard('trigger_trigger')
      .registerRunListener(async (args, state) => {
        this.log('trigger_trigger');

        this.log(args);
        this.log(state);

        await this.homey.flow.getTriggerCard('trigger').trigger({}, {});

        return true;
      });

    // console.log(this.homey.flow.getTriggerCard('trigger'));
    //
    // this.homey.setInterval(() => {
    //   console.log('triggering');
    //   this.homey.flow
    //     .getTriggerCard('trigger')
    //     .trigger()
    //     .then(this.log)
    //     .catch(this.error);
    // }, 10000);

    this.homey.flow
      .getTriggerCard('trigger')
      .registerRunListener(async (args, state) => {
        this.log('trigger');
        this.log(args);
        this.log(state);

        return Promise.reject(false);

        return true;
      });


    const homeyScript = this.homey.api.getApiApp('com.athom.homeyscript');

    //console.log(await homeyScript.get('/script'));

    this.log(homeyScript);
  }
}

module.exports = App;

// triggerFlowCard.registerRunListener((args, state) => {
//   return new Promise((resolve, reject) => {
//
//     if (args.someArg) {
//       resolve(true);
//       return;
//     }
//
//     reject(false);
//   })
// })
