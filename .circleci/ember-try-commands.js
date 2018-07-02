'use strict';

const getChannelURL = require('../config/ember-try.js');
getChannelURL().then((config) => {
  process.stdout.write((config.scenarios.map((scenario) => {
    return scenario.name;
  }).join(' ')));
});
