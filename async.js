// //async

// const { reject } = require("async");

// // alert('hello');
// // console.log('async');

// console.log(window);
// // setTimeout(
// //     ()=>{console.log('HEllo');}
// //     ,3000
// // )

// // const clInterval = setInterval(
// //     ()=>{console.log('Run every 1 sec');}
// //     ,1000
// // )

// // //to clear executionof setInterval

// // clInterval(clearInterval);

// ===================================
//      CALLBACK

// function a(callback)
// {
//     console.log(callback);
//     const d = 'a const';
//     callback(d);

// }
// // function b(data){
// //     console.log(data);
// // }
// // a(b);

// a((data)=>{console.log(data);}
// )
//-------
// function step1(callback)
// {
//     setTimeout(
//         ()=>{
//             console.log('1 done');
//             callback();
//         }
//     )
//     ,1000
// }

// function step2(callback)
// {
//     setTimeout(
//         ()=>{
//             console.log('2 done');
//             callback();
//         }
//     )
//     ,1000
// }
// function step3(callback)
// {
//     setTimeout(
//         ()=>{
//             console.log('3 done');
//             callback();
//         }
//     )
//     ,1000
// }
// function step4(callback)
// {
//     setTimeout(
//         ()=>{
//             console.log('4 done');
//             callback();
//         }
//     )
//     ,1000
// }

// step1(
//     ()=>{
//         step2(
//             ()=>{
//                 step3(
//                     ()=>{step4()}
//                 )
//             }
//         )
//     }
// )

// ===================================
//      PROMISE

// const a = new Promise(
//     (resolve,reject)=>{
//         //reject('no');
//         resolve('yes');
//     }
// )
// console.log(a);


// function data()
// {
//     return new Promise( (resolve,reject)=>
//     {
//         const data = 'hello there!';
//         //resolve(data);
//         reject(data);
//     })
// }
// console.log(data())
// data().then(
//     (data)=>{console.log(data);}
// ).catch(
//     (err)=>{console.log(err);           }
// ).finally(
//     ()=>{console.log('Done!')}
// )


// data() = promise = obj = a.name =>a.then
//-------
//!!!!!!not exec
// fetch('https://rstcountries.com/v3.1/all')
// .then((res)=>{return res.json()}
//     (data)=>{
//         console.log(res.json);
//         return res.json();
//     }
// ).then(
//     (data)=>{console.log(data)}
// ).catch(
//     (err)=>{console.log(err)}
// )

//      Async await
const x = async()=>{
try{
    const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json()
        console.log(data);
        // console.log(res); //=>[[Prototype]]:Headers
}
catch(err){console.log(err);}
}  
    
    x();
//------Regular Promise
    fetch('https://restcountries.com/v3.1/all').then((res)=>{
        console.log(res.json);
        return res.json();})
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)})
//https://randomuser.me/api/