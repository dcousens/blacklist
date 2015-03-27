var assert = require('assert')
var blacklist = require('../')

describe('blacklist', function() {
  it('works as expected', function() {
    var someInput = { a: 1, b: 2, c: 3 }
    var result = blacklist(someInput, {
      a: true,   // a will not be in the result
      b: false,  // b will be in the result
      c: 1 > 2   // false, therefore c will be in the result
    })

    assert.deepEqual(result, { b: 2, c: 3 })
  })
})