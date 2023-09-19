const test = require('tape')
const names = require('..')

test('names', function (t) {
  t.ok(Array.isArray(names), 'is an array')
  t.ok(names.length > 10 * 1000, 'has hella names')
  t.end()
})
