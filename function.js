 

//Function Declaration

 const c = detail('ab' , 'xy');
 console.log(c);

 function detail(f,l)
 {
    return `my name is ${f} ${l}`;
 }

 const m = detail('hi' , 'xuy');
 console.log(m);
//


//Function Expression
//cannot be called before function declaration
//let,const= reference error, var=type error

//=>CORRECT
let sum= function (a,b)
{
    return a+b
}
console.log(sum(3,5));

// //CALL BEFORE DEFINING
// console.log(sum2(3,5));
// let sum2= function (a,b)
// {
//     return a+b
// }
// //using let
// //-------ReferenceError: Cannot access 'sum2' before initialization


//const

// console.log(sum3(3,5));
// const sum3= function (a,b)
// {
//     return a+b
// }
//----ReferenceError: Cannot access 'sum3' before initialization


//var
// console.log(sum4(3,5));
// var sum4= function (a,b)
// {
//     return a+b
// }
//-----------TypeError: sum4 is not a function

//Arrow Function
//single line
let sumArrow = (a,b) => a+b;
console.log(sumArrow(2,7));


//multiline
let sumMulti = (a,b) =>
{
    let x= 2*a;
    let y= 2*b;
    return x*y;
}
console.log(sumMulti(3,5));