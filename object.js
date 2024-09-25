const myDetail=
{
    firstName: 'Sam' ,
    age: 2024-1995 ,
    friend: ['Anam','Sandy'] ,
    'twoHundred' : 200,
    addr:{
        street: 'prabhat',
        hn: 3
    } ,
    //old syntax
    fullD : function()
    {
        console.log(`my name is ${this.firstName}`);
    } ,
//new syntax
fullD2(){
    console.log(`my age is ${this.age}`);
}

}

// console.log(myDetail.firstName);
// console.log(myDetail.friend[0]);

// //Update
// myDetail.firstName= 'abc';
// console.log(myDetail);

// //add
// myDetail.address='Udaipur';
// console.log(myDetail);

// //Bracket notaion
// console.log(myDetail['age']);

// //dynamic
// let a='age';
// console.log(myDetail[a]);

// //string
// console.log(myDetail['twoHundred']);

// //nested
// console.log(myDetail.addr.hn);
// console.log(myDetail['addr']['hn']);

//this & function
//'this' point to the object where it is used
// myDetail.fullD();
// myDetail.fullD2();

//FOR IN & FOR ALL loop in js
const company = ['IBM' ,'PWC' , 'KPMG' ,'JP M.'];
for(let index in company)
{
    console.log(index);
}
for(let nam of company)
    {
        console.log(nam);
    }
    

    const product = {
        nam: 'tv',
        price: '5000'
    }

    for(let i in  product)
    {
        console.log(`${i} : ${product[i]}`);
    }


    
    

