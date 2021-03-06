# blacklist

[![Build Status](https://travis-ci.org/dcousens/blacklist.svg)](https://travis-ci.org/dcousens/blacklist)
[![Version](http://img.shields.io/npm/v/blacklist.svg)](https://www.npmjs.org/package/blacklist)

This module shallow copies an object, ignoring keys depending on the filter object passed to it.

Filters can be provided as an object (truthy keys are blacklisted) or string arguments.

## ESNext alternative

If you can, **don't use this library.**
Use ESNext [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) instead.

``` javascript
let { a, ...filtered } = { a: 1, b: 2, c: 3 }
// filtered => { b: 2, c: 3 }
```


### Example
``` js
var blacklist = require('blacklist')

// ...

var someInput = { a: 1, b: 2, c: 3 }

blacklist(someInput, 'a')
// => { b: 2, c: 3 }
```

**Protip:** you can also use a filter object
``` js
blacklist(someInput, {
  a: true,   // a will not be in the result
  b: false,  // b will be in the result
  c: 1 > 2   // false, therefore c will be in the result
})
// => { b: 2, c: 3 }
```


## LICENSE [MIT](LICENSE)
