const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        }
    }
)


const Product = mongoose.model('Product' , projectSchema);

module.exports = Product;