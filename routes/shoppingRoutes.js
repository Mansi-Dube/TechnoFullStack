const express = require('express');
const router = express.Router()
const shoppingController = require('../controller/shoppingController')


router.get('/allproducts' , shoppingController.getAllProducts);
router.post('/addproduct' , shoppingController.addProduct);
router.get('/singleproduct/:id' , shoppingController.singleProduct)
router.delete('/deleteproduct/:id' , shoppingController.deleteProduct);
router.put('/updateproduct/:id' , shoppingController.updateProduct)
router.patch('/patchproduct/:id' , shoppingController.patchProduct)
router.get('/getselectedproducts' , shoppingController.getSelectedProducts)

module.exports = router 


