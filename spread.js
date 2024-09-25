// var a = [1,2,3];
// a.push(4);
// console.log(a);

// var a=[10,20,30];
// var b = a;
// console.log(a,b);
// b.push(55);
// console.log(a,b);
// //copy by reference

// b= [...a];
// console.log(a,b);
// b.push(76);
// console.log(a,b);

// //Concat
const aa=['apple' , 'mango'];
const bb =['cherry','ball' ,'litchi'];
const cc = [...aa,...bb];
const dd = ['pink' , ...aa , 'blue' ,...bb];
console.log(aa,bb,cc,dd);


// //obj

// const o1= {a:1,b:4};
// const o2 = {b:10,c:20};
// const o3 = {...o1};
// const o4 ={...o1 , ...o2}; //in o4 value of b will be the last recen value assigned to b ie. 10 
// const o5 ={...o2 , ...o1};
// console.log(o1,o2,o3,o4,o5);
// // //.......

// //rest
// const f =[1,2,3,4,5]
// const [first,second,...others] = f;
// console.log(first,second,others);

// //... in func params becomes REST =>the values become array
// function fu(...val){
//     console.log(val);
//     val.forEach(
//         (item)=>{console.log(item);}
//     )
// }
// fu(1,2,3,4);