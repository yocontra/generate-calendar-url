'use strict';

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

  var data = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    //'URL:' + document.URL,
    'DTSTART:' + formatTime(evt.start),
    'DTEND:' + formatTime(evt.end),
    'SUMMARY:' + evt.title,
    'DESCRIPTION:' + evt.description,
    'LOCATION:' + evt.location,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');

  // Supported by Safari browser
  var blob = new Blob([data], { type: 'text/calendar' })
  return URL.createObjectURL(blob)
};
