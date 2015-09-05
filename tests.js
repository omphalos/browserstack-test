#!/usr/bin/env node

'use strict'

var test = require('tape-catch')
var add = require('./index').add

test('addition', function(t) {
  t.equal(add(1, 2), 3)
  t.end()
})
