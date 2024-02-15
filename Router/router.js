//path to resolve the client request


const express = require('express')


const userController = require('../Controller/userController')


const itemController = require('../Controller/itemController')

const cartController = require('../Controller/cartController')

const jwtMiddleware = require('../Middleware/jwtMiddleware')


const multerConfig = require('../Middleware/multer')


const router = new express.Router()



    
    router.post("/uploads", multerConfig.single('product'), (req,res) => {
        res.json({
            success: 1,
            image_url: `http://localhost:4000/uploads/${req.file.filename}`
        })
    })
    router.post("/product/add",itemController.addproduct)
    router.post("/removeproduct",itemController.removeproduct)
    router.get("/allproducts",itemController.getallproduct)
    router.post("/user/register",userController.register)
    router.post('/user/login',userController.login)
    router.post('/addtocart',jwtMiddleware,cartController.addtocart)
    router.post('/removefromcart',jwtMiddleware,cartController.removefromcart)
    router.post('/getcart',jwtMiddleware,cartController.getcart)

module.exports = router