const express = require('express');
const Product = require('../model/product');
const Counter = require('../model/id_counter');
const router = express.Router();
const productController = require('../controllers/product_controller')


//create a new Product
router.post('/product', productController.createProduct );

//fetch all products
router.get('/product', productController.fetchProducts) 
    
// fetch one product
router.get('/product/:id', productController.fetchOneProduct) 
   
// fetch one product and update
router.patch('/product/:id',productController.updateProduct) 

//delete a product
router.delete('/product/:id',productController.deleteProduct ) 



module.exports = router;