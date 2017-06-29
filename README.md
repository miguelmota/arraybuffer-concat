# arraybuffer-concat

> Concatenate ArrayBuffers

# Install

```bash
npm install arraybuffer-concat
```

# Usage

```javascript
var arrayBufferConcat = require('arraybuffer-concat');

var a = new Uint8Array(1);
a[0] = 5;

var b = new Uint8Array(2);
b[0] = 2;
b[1] = 7;

var c = new Uint8Array(1);
c[0] = 9;

var arrayBuffer = arrayBufferConcat(a, b, c)
console.log(arrayBuffer.byteLength) // 4

var uint8 = new Uint8Array(arrayBuffer)
console.log(uint8[0]) // 5
console.log(uint8[1]) // 2
console.log(uint8[2]) // 7
console.log(uint8[3]) // 9
```

# Test

```bash
npm test
```

# License

MIT
