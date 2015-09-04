#!/usr/bin/env node

'use strict'

var test = require('tape')
var add = require('./browserstack-test').add

test('addition', function(t) {
  t.equal(add(1, 2), 3)
  t.end()
})
