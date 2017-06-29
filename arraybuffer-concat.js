(function(root) {
  'use strict'

  function isValidArray(x) {
    return /Int8Array|Int16Array|Int32Array|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|Float32Array|Float64Array|ArrayBuffer/gi.test(Object.prototype.toString.call(x))
  }

  function arrayBufferConcat(/* arraybuffers */) {
    var arrays = [].slice.call(arguments)

    if (arrays.length <= 0 || !isValidArray(arrays[0])) {
      return new Uint8Array(0).buffer
    }

    var arrayBuffer = arrays.reduce(function(cbuf, buf, i) {
      if (i === 0) return cbuf
      if (!isValidArray(buf)) return cbuf

      var tmp = new Uint8Array(cbuf.byteLength + buf.byteLength)
      tmp.set(new Uint8Array(cbuf), 0)
      tmp.set(new Uint8Array(buf), cbuf.byteLength)

      return tmp.buffer
    }, arrays[0])

    return arrayBuffer
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = arrayBufferConcat
    }
    exports.arrayBufferConcat = arrayBufferConcat
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return arrayBufferConcat
    })
  } else {
    root.arrayBufferConcat = arrayBufferConcat
  }
})(this)
