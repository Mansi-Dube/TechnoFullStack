// // console.log('Hello');

const { text } = require('body-parser');
const fs = require('fs') ;
const os = require ('os');
const path = require('path')
const http = require ('http')


// console.log('Sync File read start');
// var data = fs.readFileSync('./text.txt', 'utf-8');
// console.log(data);
// console.log('Sync File read end');

// console.log('...')

// console.log('Async File read start');
// var data = fs.readFile('./text.txt', 'utf-8' , (err,data)=>{console.log(data);});
// console.log(' Async File read end');

// console.log('...')

// console.log('Write File write start');
// const writeData = 'Written using WriteFile';
// var data = fs.writeFileSync('./textWrite.txt', writeData );
// console.log(' Write File write end');

// console.log('...')

// console.log('Write File write start');
// var data = fs.writeFile('./textWrite.txt', 'text data' , (err)=>{
//     if(err)
//         console.log('Error')
//     else
//         console.log('Data written successfully')
//     } );
    
// console.log(' Write File write end'); 

// console.log('...')

// console.log('Append File read start');
// var data = fs.appendFile('./text.txt', "Appended using appendFile" , (err)=>{console.log('done');});
// console.log(' Append File read end');

// console.log('...')

// //to delete
// // console.log('delete File read start');
// // var data = fs.unlink('./text.txt',  (err)=>{});
// // console.log(' Append File read end');

//--------------------------------------------------------------

//Opeating System Module
// const os = require ('os');
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.totalmem()); //always in bytes
// console.log(os.freemem());

//--------------------------------------------------------------

//Path Module
//  const path = require('path')
//  console.log(path.dirname('D:/Desktop/TechnoFrontend/nodejs'))
//  console.log( path.extname('D:/Desktop/TechnoFrontend/nodejs/index1.js') )
//  console.log( path.basename('D:/Desktop/TechnoFrontend/nodejs/index1.js') )
//  console.log( path.parse('D:/Desktop/TechnoFrontend/nodejs/index1.js') )
//  console.log( path.resolve('Users' , 'local' , 'bin' ,'index1.js') )
//  console.log( path.join('Users' , 'local' , 'bin' ,'index1.js') )

 ////do it -notes //__dirname=>gives current dir name

 //*****code on line 14 can be written as:  */
//  console.log('directory name: ' , __dirname);
//  const filePath = path.join(__dirname , 'text.txt');
//  fs.readFile(filePath , 'utf-8' , (err, data)=>{console.log(data)})
//  console.log(path.join(__dirname , 'text.txt'));

// console.log(__filename);
// console.log(__dirname)

//-HTTP Module
//const http = require ('http')
const server = http.createServer(
    ()=>{
        console.log(req);
        console.log(res);
        res.end('Hello from server')
        if(req.url === '/about')
            res.end("about page")
    }
)
server.listen(
    3000, ()=>{console.log('Server is running');}
)


// //------------EVENTS Module
// const EventEmitter = require ('events')
// const event = new EventEmitter();

// event.on('start', ()=>{console.log('Server is starting')})

// event.emit('start')

// setTimeout(
//     ()=>{ server.close()}
// )
// server.on('close' , ()=>{console.log('Server is closing')})

// server.on('request')

//GETTING FROM BACKEND

// const server  = http.createServer((req,res)=>{


// const filePath = path.join( __dirname , 'backend.html')

// fs.readFile( filePath , (err, data)=>{
// if(err)
//     res.end("error")
// else
//     {res.writeHead(200 , {'Content-Type' : 'text/html'})
//     res.end(data)}
// })


// })
// server.listen(
//     3000, ()=>{console.log('Server is running')}
// )