//'use strict'

const b = true+1;
console.log(typeof(b));

const str = '56';
console.log(Number(str));
console.log(typeof(str));

console.error('hello');
console.warn('hello');

//time
console.time('ar');
const arr=[1,2,3,4];
console.log(arr);
console.timeEnd('ar');

//strict mode
firstName='mansi';
console.log(firstName);

// write 'use strict' in line 1
// u get error
// ReferenceError: firstName is not defined
