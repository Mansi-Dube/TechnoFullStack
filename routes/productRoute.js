const express = require('express')
const router = express.Router()
const prodController = require('../controller/productController')


router.get('/getproduct' , prodController.getProduct)

router.post('/createproduct' , prodController.createProduct)

router.get('/singleproduct/:id' , prodController.singleProduct)

router.delete('/deleteproduct/:id' , prodController.deleteProduct)

router.put('/updateproduct/:id' , prodController.updateProduct)
module.exports = router;

