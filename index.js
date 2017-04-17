(function () {
	'use strict';

  function blacklist (src) {
    var copy = {}
    var filter = arguments[1]

    if (typeof filter === 'string') {
      filter = {}
      for (var i = 1; i < arguments.length; i++) {
        filter[arguments[i]] = true
      }
    }

    for (var key in src) {
      // blacklist?
      if (filter[key]) continue

      copy[key] = src[key]
    }

    return copy
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = blacklist;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define('blacklist', [], function () {
      return blacklist;
    });
  } else {
    window.blacklist = blacklist;
  }
}());
