/* global describe it */

var assert = require('assert')
var blacklist = require('../')

describe('blacklist', function () {
  it('blacklists properties in a filter object', function () {
    var someInput = { a: 1, b: 2, c: 3 }
    var result = blacklist(someInput, {
      a: true,
      b: false,
      c: false
    })

    assert.deepEqual(result, { b: 2, c: 3 })
  })
  
  it('accepts n string arguments', function () {
    var someInput = { a: 1, b: 2, c: 3 }
    var result = blacklist(someInput, 'b', 'c')

    assert.deepEqual(result, { a: 1 })
  })
})
