const express = require('express')
const router = express.Router();
const userC = require ('../controller/userController')
router.get('/getUser' , userC.getUsers)
module.exports = router