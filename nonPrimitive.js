const arr=['name' , true , 23];
console.log(arr);

console.log(arr[0]);

//last element
console.log(arr[arr.length -1]);

//Array Methods

//adds element at the end
const pushResult= arr.push('techno');
console.log(arr);
console.log(pushResult);

//returns the new element
const popResult= arr.pop();
console.log(arr);
console.log(popResult);
 
//unshift
const unshiftResult= arr.unshift(4);
console.log(arr);
console.log(unshiftResult);

//shift
//removes from start  returns the removed
const shiftResult= arr.shift();
console.log(arr);
console.log(shiftResult);

//include=chck if string is in array or not
const includeResult = arr.includes('name');
console.log(includeResult);