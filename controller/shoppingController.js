const Product = require('../models/productModel');

//----------------------------------------------

exports.getAllProducts = async (req,res)=>{
    try{
        var product = await Product.find();
    if(product)
    {
        res.status(200).json(
            {
                length: product.length,
                data: product
            }
        )
    }
    }
    catch(error){
        res.status(400).send(error)
    }
}
//----------------------------------------------
exports.addProduct = async (req,res)=>
{
    try{
        var items = await Product.create(req.body)
        res.status(201).json(
            {
          message : "Item created successfully" ,
           data : items}
        )
    }catch(error){
        res.status(400).send(error)
    }
    
}
//----------------------------------------------

exports.singleProduct = async(req,res)=>{
    try {
        var product = Product.findById(req.params.id)
        res.status(200).json({data:product})
        }
    catch (error) {
        res.send(error)
    }
}



//----------------------------------------------

exports.deleteProduct = async(req,res)=>{
    try {
        var product =await  Product.findByIdAndDelete(req.params.id)
        
        
            res.status(200).json({data: product})
        
    } catch (error) {
        
    }
}

//---------------------------------------------------

exports.updateProduct = async(req,res)=>{
    try {
    const updateProduct = req.body
    const updatedItem  = await Product.findByIdAndUpdate(req.params.id ,updateProduct , {new:true})

    if(updatedItem)
    {
        res.status(201).json(
            {data : updatedItem}
        )
    }
    }catch (error) {
        res.status(400).send(error)
    }
}
//---------------------------------------------------
exports.patchProduct = async(req,res) =>{
    try {
        const updatedField = await Product.findByIdAndUpdate(req.params.id , {$set :req.body} ,{new:true})
    if(updatedField)
    {
        res.status(201).json(
            {data:updatedField}
        )   
    }
    } catch (error) {
        res.status(400).send(error)
    }
    
}

//=====================================QUERY PARAMETER===============================================

exports.getSelectedProducts = async (req,res)=>{
    try{
        const category = req.query.category;
        const obj = {}
        if(category)
            obj.category = category



        const product = await Product.find(obj)
    if(product)
    {
        res.status(200).json(
            {
                length: product.length,
                data: product
            }
        )
    }
    }
    catch(error){
        res.status(400).send(error)
    }
}
//-------------------------------------------------------