# generate-calendar-url [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr>
<td>Package</td>
<td>generate-calendar-url</td>
</tr>
<tr>
<td>Description</td>
<td>generate a url to add an event to your calendar</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

## Install

```
npm install generate-calendar-url --save
```
## Example

```js
var cal = require('generate-calendar-url');

// title, start, and end are required
var event = {
  title: 'BDay Bash',
  start: new Date('July 20, 2020 19:00'),
  end: new Date('July 20, 2020 22:00'),
  location: '123 Fake St',
  description: 'Johnny is having a blowout'
};

console.log(cal.google(event));
// https://www.google.com/calendar/render?action=TEMPLATE&text=BDay%20Bash&dates=20200721T020000Z%2F20200721T050000Z&details=Johnny%20is%20having%20a%20blowout&location=123%20Fake%20St

console.log(cal.ical(event));
// data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20200721T020000Z%0ADTEND:20200721T050000Z%0ASUMMARY:BDay%20Bash%0ADESCRIPTION:Johnny%20is%20having%20a%20blowout%0ALOCATION:123%20Fake%20St%0AEND:VEVENT%0AEND:VCALENDAR

console.log(cal.outlook(event));
// data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20200721T020000Z%0ADTEND:20200721T050000Z%0ASUMMARY:BDay%20Bash%0ADESCRIPTION:Johnny%20is%20having%20a%20blowout%0ALOCATION:123%20Fake%20St%0AEND:VEVENT%0AEND:VCALENDAR
```

## LICENSE

(MIT License)

Copyright (c) 2015 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[gittip-url]: https://www.gittip.com/wearefractal/
[gittip-image]: http://img.shields.io/gittip/wearefractal.svg

[downloads-image]: http://img.shields.io/npm/dm/generate-calendar-url.svg
[npm-url]: https://npmjs.org/package/generate-calendar-url
[npm-image]: http://img.shields.io/npm/v/generate-calendar-url.svg

[travis-url]: https://travis-ci.org/wearefractal/generate-calendar-url
[travis-image]: https://travis-ci.org/wearefractal/generate-calendar-url.png?branch=master

[coveralls-url]: https://coveralls.io/r/wearefractal/generate-calendar-url
[coveralls-image]: https://coveralls.io/repos/wearefractal/generate-calendar-url/badge.png

[depstat-url]: https://david-dm.org/wearefractal/generate-calendar-url
[depstat-image]: https://david-dm.org/wearefractal/generate-calendar-url.png

[david-url]: https://david-dm.org/wearefractal/generate-calendar-url
[david-image]: https://david-dm.org/wearefractal/generate-calendar-url.png?theme=shields.io
