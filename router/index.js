const express = require('express');
const Product = require('../model/product');
const Counter = require('../model/id_counter');
const router = express.Router();
// const productController = require('../controllers/product_controller')

router.post('/product', async (req, res) => {


    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).send(newProduct)
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }



});

router.get('/product', async (req, res) => {
    try {
        const productData = await Product.find()
        res.status(201).send(productData);

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }
});

// fetch one product
router.get('/product/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const productData = await Product.findOne({ id: req.params.id })
        console.log(productData);
        res.status(201).send(productData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }

});

// fetch one product and update
router.patch('/product/:id', async (req, res) => {

    try {
        const productData = await Product.findOneAndUpdate({ id: req.params.id }, req.body);

        res.status(201).send(productData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }


})


router.delete('/product/:id', async (req, res) => {

    try {
        const productData = await Product.findOneAndDelete({ id: req.params.id }, req.body);

        res.status(201).send(productData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }
    
    
})



module.exports = router;