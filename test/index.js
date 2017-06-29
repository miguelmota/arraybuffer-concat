var test = require('tape')
var arrayBufferConcat = require('../arraybuffer-concat')

test('concat arraybuffers', function (t) {
  'use strict';

  t.plan(9);

  var a = new Uint8Array(1);
  a[0] = 5;

  var b = new Uint8Array(2);
  b[0] = 2;
  b[1] = 7;

  var c = new Uint8Array(1);
  c[0] = 9;

  var arrayBuffer = arrayBufferConcat(a, b, c)
  t.equal(arrayBuffer.byteLength, 4)

  var uint8 = new Uint8Array(arrayBuffer)
  t.equal(uint8[0], 5)
  t.equal(uint8[1], 2)
  t.equal(uint8[2], 7)
  t.equal(uint8[3], 9)

  var x = arrayBufferConcat()
  t.equal(x.byteLength, 0)

  var x2 = arrayBufferConcat(function(){})
  t.equal(x2.byteLength, 0)

  var x3 = arrayBufferConcat({})
  t.equal(x3.byteLength, 0)

  var x4 = arrayBufferConcat([])
  t.equal(x4.byteLength, 0)
})

