'use strict';

var ics = require('./lib/ics');
var google = require('./lib/google');

module.exports = {
  google: google,
  outlook: ics,
  ical: ics,
  ics: ics
};