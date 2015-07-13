'use strict';

var should = require('should');
var generate = require('../');

var party = {
  title: 'BDay Bash',
  start: new Date('July 20, 2020 19:00'),
  end: new Date('July 20, 2020 22:00'),
  location: '123 Fake St',
  description: 'Johnny is having a blowout'
};

describe('google()', function() {
  it('should generate a valid url', function(done) {
    var expected = 'https://www.google.com/calendar/render?action=TEMPLATE&text=BDay%20Bash&dates=20200721T020000Z%2F20200721T050000Z&details=Johnny%20is%20having%20a%20blowout&location=123%20Fake%20St';
    should.exist(generate.google);
    generate.google(party).should.equal(expected);
    done();
  });
});

describe('ical()', function() {
  it('should generate a valid url', function(done) {
    var expected = 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20200721T020000Z%0ADTEND:20200721T050000Z%0ASUMMARY:BDay%20Bash%0ADESCRIPTION:Johnny%20is%20having%20a%20blowout%0ALOCATION:123%20Fake%20St%0AEND:VEVENT%0AEND:VCALENDAR';
    should.exist(generate.ical);
    generate.ical(party).should.equal(expected);
    done();
  });
});

describe('outlook()', function() {
  it('should generate a valid url', function(done) {
    var expected = 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20200721T020000Z%0ADTEND:20200721T050000Z%0ASUMMARY:BDay%20Bash%0ADESCRIPTION:Johnny%20is%20having%20a%20blowout%0ALOCATION:123%20Fake%20St%0AEND:VEVENT%0AEND:VCALENDAR';
    should.exist(generate.outlook);
    generate.outlook(party).should.equal(expected);
    done();
  });
});