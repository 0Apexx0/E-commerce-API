const express = require('express');
const router = express.Router();
const productController = require('../controllers/product_controller')

router.get('/' , (req,res)=>{
    res.header('Content-type', 'text/html');
    return res.end('<h1>Get Started :</h1><ul><li>Open Postman start sending request on "(above url)/product</li></ul>');
});

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