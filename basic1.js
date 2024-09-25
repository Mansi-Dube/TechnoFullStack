    
    //
    let firstName="Sam";
    let age=20;
    let isJsFun=true;

    //check type
    console.log(typeof firstName);

    //var

     var department="CS";
     department='mechanical';
    console.log(department);

//     //decclare
 var dept = 'cs';
 console.log(dept);
// //wont give error

// //let
let college='techno';
college='gits';
console.log(college);
// //gives error

// const emo='hi';
// emo='ni';
// console.log(emo);
// //gives error -cannot redeclare

//Operators
let a=5;
let b='5';
console.log(a==b);
console.log(a===b);

let f='mansi';
let l='dube';
let full='my'+' '+'name'+' '+'is'+' '+f;
console.log(full);

let template_full = `my name is f`;
console.log(template_full);

template_full = `my name is ${f}`;
console.log(template_full);

//truthy and fallasy

// truthy:non empty String, non 0, ' '
// fallsy: 0 null NaN undefined false ''

//if(' ')('')('abc')(0)(null)(undefined)(NaN)
if (undefined)
    console.log('Truthy');
else
    console.log('falsy');

