const express = require('express')
const app = express();
const PORT   = 8000;

app.use(express.json())
const mongoose = require('mongoose'); //require mongoose
   //call mongoose 
   mongoose.connect('mongodb://localhost:27017/shopping').then(
    ()=>{console.log('connection Succesful')}   )


app.use('/api', require('./routes/shoppingRoutes'))

//define the schema - name price category (shoppingData)





















app.listen(PORT, ()=>{console.log(`Server is running on port: ${PORT} `) } )