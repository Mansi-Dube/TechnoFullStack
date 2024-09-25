const product =  require('../Product')

exports.getProduct = (req,res)=>{
 res.status(200).json(
    {data:product}
 )   
}
//not working
exports.createProduct = (req,res)=>{
    const newP = req.body; 
    newP.id = product.length + 1;
    product.push(newP)

    res.json(
        {data: product}
    )
}

exports.singleProduct = (req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const filterProd = product.filter(
        (el)=> el.id === id
    );
    res.json(
        {data : filterProd}
    )
}

exports.deleteProduct = (req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const filterProd = product.filter(
        (el)=> el.id !== id
    );
    res.json(
        {data : filterProd}
    )
}

exports.updateProduct = (req,res)=>{
    const id = parseInt(req.params.id);
    const updateP = req.body;
    console.log(updateP)
    const singleP = product.find(
        (el)=> el.id === id
    )

    console.log(singleP)
    singleP.price = updateP.price
    res.json(
        {data:singleP }
    )
}