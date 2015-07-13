'use strict';

module.exports = function(date) {
  return date.toISOString().replace(/-|:|\.\d+/g, '');
};
