'use strict';

var url = require('url');
var defaults = require('lodash.defaults');
var formatTime = require('./formatTime');

module.exports = function(event) {
  var evt = defaults(event, {
    title: '',
    start: '',
    end: '',
    description: '',
    location: ''
  });

  return url.format({
    protocol: 'https',
    host: 'www.google.com',
    pathname: '/calendar/render',
    query: {
      action: 'TEMPLATE',
      text: evt.title,
      dates: formatTime(evt.start) + '/' + formatTime(evt.end),
      details: evt.description,
      location: evt.location
    }
  });
};