//--------------------------------------GET METHOD-------------------------------------------------
const express = require('express')
const app = express()
const userController = require ('./controller/userController');
const chalk = require('chalk');
const userRoutes = require('./routes/userRoute')
app.use(express.json())


app.use(                     //Middleware
    (req,res,next)=>{
        console.log('Middleware 1 is running');
        // console.log(`${} ${  }`)
        next()
    }
)
app.use(
    (req,res,next)=>{
        console.log('Middleware 2 is running');
        console.log(`${req.method} ${ req.url}`)
        next()
    }
)
app.use(     //changing req properties & retrieving them in app.get function
    (req,res,next)=>{
        req.name = 'Sami';
        next()
    }
)

// app.get( '/getUsers' , userController.getUsers) --directly

// app.use('/api' , userRoutes)
app.use('/api',require('./routes/productRoute'))
app.use('/api' , require('./routes/userRoute'))
app.listen(3000 , ()=>{console.log(chalk.bold.blue.italic('Server is running'))}) //using chalk
















//--------------------------------------POST METHOD-------------------------------------------------

//                  USING EXPRESS

// const express = require('express')
// const app = express()
// const userController = require('./controller/userController')  //using controller file

// app.use(express.json())

// app.post(
//     '/' , userController.register
// )
// app.listen(3000 , ()=>{console.log('Server is running')})
//---------------------------------------------------------------------------



//              USING HTTP


// const http = require('http')
// let finalData = '';
// const server = http.createServer(
//     (req,res)=>{
//         let jsonData = '';
//         if (req.method === 'POST' )
//         {
//             req.on('data' , (data)=>{
//                 jsonData += data.toString();
//                 console.log(jsonData) ;
//             })

//             req.on('end' , ()=>{
//                 finalData = JSON.parse(jsonData);
//                 console.log(finalData);
//                 res.end(JSON.stringify(finalData))
//             })
//         }
            
//     }
// )
// server.listen(3000, ()=>{console.log('server is running')})







