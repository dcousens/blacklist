/* global describe it */

var assert = require('assert')
var blacklist = require('../')

describe('blacklist', function () {
  it('omits properties from a filter object', function () {
    var someInput = { a: 1, b: 2, c: 3 }
    var result = blacklist(someInput, {
      a: true,
      b: false,
      c: false
    })

    assert.deepEqual(result, { b: 2, c: 3 })
  })

  it('omits properties from an arguments list', function () {
    var someInput = { a: 1, b: 2, c: 3 }
    var result = blacklist(someInput, 'b', 'c')

    assert.deepEqual(result, { a: 1 })
  })
})
