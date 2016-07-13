var blacklist = require('../')
var tape = require('tape')

tape('omits properties from a filter object', function (t) {
  var someInput = { a: 1, b: 2, c: 3 }
  var result = blacklist(someInput, {
    a: true,
    b: false,
    c: false
  })

  t.deepEqual(result, { b: 2, c: 3 })
  t.end()
})

tape('omits properties from an arguments list', function (t) {
  var someInput = { a: 1, b: 2, c: 3 }
  var result = blacklist(someInput, 'b', 'c')

  t.deepEqual(result, { a: 1 })
  t.end()
})
