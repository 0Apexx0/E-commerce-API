const Product = require('../model/product');





module.exports.create = async (req,res)=>{
    
    
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).send(newProduct)
    } catch (err) {
        console.log(err);
        res.status(400).send({message : "error"})
    }



}