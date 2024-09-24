//charAt
//concat
// includes
// indexOf
// Last indexOf
//split
// slice
//     toUppercase
//     toLowercase
//     repeat
//============================
const str = '  abcderf  '
console.log('length' , str.length);

//charAt
console.log(str.charAt(2));

//concat
var str2 = 'world'
console.log(str.concat(' ',str2));
// includes
console.log(str.includes('hello'));
// indexOf
console.log(str.indexOf('e'));
// Last indexOf
console.log(str.lastIndexOf('w'));
//split

console.log(str.split(' '));
// slice
console.log(str.slice(1,3));
console.log(str.slice(4,1));
//substring
console.log(str.substring(3,1));
//     toUppercase
console.log(str.toUpperCase());
//     toLowercase
console.log(str.toLowerCase());
//     repeat
console.log(str.repeat(2));

//trim
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
//join --obsolete
var a =['jim','kenny'];
console.log(a.join(' '));


