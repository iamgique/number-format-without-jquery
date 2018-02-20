# number-format-without-jquery
## What it is ?
This is a source for input number format. 
This source use a pure javascript es5-es6.
You can try at below source.

## How to use

### Source
```
https://github.com/iamgique/number-format-without-jquery.git
```

### Install
```
npm install number-format-without-jquery
```

### Node URL
```
https://www.npmjs.com/package/number-format-without-jquery
```

### Demo 
```javascript
var demo = require('number-format-without-jquery');

// demo.numberFormat('format', 'input data');
console.log(demo.numberFormat('0-0000-00000-00-0', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n'));
console.log(demo.numberFormat('0-0000-00000-00-0', '1234567890123'));
console.log(demo.numberFormat('0-0000-00000-00-0', '123-45678-90123!@#$%^&*abc'));
console.log(demo.numberFormat('0-0000-00000-00-0', '1234560123'));
console.log(demo.numberFormat('0000-0000-0000-0000', '1234567890123456'));
console.log(demo.numberFormat('0000*0000x0000-0000', '1234567890123456'));

//1-2345-67890-12-3
//1-2345-67890-12-3
//1-2345-67890-12-3
//1-2345-60123
//1234-5678-9012-3456
//1234*5678x9012-3456
```
