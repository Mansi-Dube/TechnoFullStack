const o1 = {a:1 , b:2};
const o2 = {c:34, d:56};
//target source
Object.assign(o1,o2);
console.log(o1);

const p  = {
    a: 'er' ,
    b:99
}
Object.freeze(p);
p.a = 'kilj';
console.log(p);
//ES6 destructuring & spread operator
const i = [1,2,3];
const [aa,bb,cc] = i ;
console.log(aa,bb,cc);
const [x,,y] = i;
console.log(x,y);

//nestted
const m = [1,2,[11,22,33],4,5];
var [a,b,[c,d,e],f,g] = m;

//obj

const pr = {
    na : 'cv',
    price : '$20'
}
var {na , price} = pr;
console.log(na , price);
//renaming=> na : prodName
//new prop=> category = 'Electronics'
var {na : prodName , price, category = 'Electronics'} = pr;
console.log(prodName,price,category);


//function
function s([a,b,c]) //<= destructur in params
{
    //const [a,b,c]=item;
    return a+b+c;}
console.log(s([10,20,4]));