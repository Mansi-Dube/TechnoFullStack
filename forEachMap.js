//For Each
const n =[10,20,30,40,50,260];
const m =n.forEach( (el)=>{console.log(el); } )

console.log(m);
//for each returns Undifined

//===================================
//Map
//returns new array

const mapp = n.map( 
    (el)=>
        {return el*2; } 
)
console.log(mapp);
console.log(n); //does no tmodify original array

//===================================
//FILTER
const fil = n.filter(
    (el)=>{
        return el>25;
    }
)
console.log(fil);
console.log(n); //does no tmodify original array

//===================================
//FIND
const fin = n.find(
    (el)=>{
        return el>25;
    }
)
console.log(fin);
console.log(n); //does no tmodify original array

//===================================
//FINDIndex
const fidx = n.findIndex(
    (el)=>{
        return el>25;
    }
)
console.log(fidx);
console.log(n); //does no tmodify original array

//===================================
//Reduce

const red = n.reduce(
    (accumulator, el) =>
    {
        console.log(accumulator, el);
        return accumulator + el ;
    }
    ,0 //  <=value of acc.
)

//===================================
//Reverse

const rev = n.reverse();
console.log(rev);
console.log(n);

//===================================
//ToReverse

const TOrev = n.toReversed();
console.log(TOrev);
console.log(n);

//===================================
//SORT

const sortt = n.sort();
console.log(sortt);

const sorrt = n.sort();


//===================================
//SOME
const som = n.some(
    (el)=>{
        return el>30;
    }
)
console.log(som);

//===================================
//eVERY
const ev = n.every(
    (el)=>{
        return el>30;
    }
)
console.log(ev);

//===================================
//key
const car ={
    nam : 'Xi',
    model : 'BMW' ,
    color: 'Red'
}

//DELETE PROP
delete car.color;
console.log(car);

const keyRes = Object.keys(car);
console.log(keyRes)
keyRes.forEach( (KEY)=>
{
    console.log(KEY);
})

//obj value
const valueRes = Object.values(car)
console.log(valueRes);
valueRes.forEach((values)=>{console.log(values);})



//==================================
//

const entry = Object.entries(car);
console.log(entry);
 
entry.forEach( (item)=>
    {
        const [KEY , value] =item;
        console.log(KEY ,value);
    })
//==================================
//DESTRUCTURING

const a = ['kli' , 'dki'];
const a1 = a[0];
const a2 = a[1];
console.log(a1,a2);
//instead

const [b1,b2] = ['kli' , 'dli'];
console.log(b1 ,b2);