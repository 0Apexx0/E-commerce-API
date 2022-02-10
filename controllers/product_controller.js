const Product = require('../model/product');


module.exports.createProduct = async (req,res)=>{
    
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).send(newProduct)
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }
}

module.exports.fetchProducts = async (req,res)=>{

    try {
        const productData = await Product.find()
        res.status(201).send(productData);

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }


} 
module.exports.fetchOneProduct = async (req,res)=>{

    try {
        const productData = await Product.findOne({ id: req.params.id })
        console.log(productData);
        res.status(201).send(productData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }

} 
module.exports.deleteProduct = async (req,res)=>{

    try {
        const productData = await Product.findOneAndDelete({ id: req.params.id }, req.body);

        res.status(201).send(productData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }

} 
module.exports.updateProduct = async (req,res)=>{

    try {
        const productData = await Product.findOneAndUpdate({ id: req.params.id }, req.body);

        res.status(201).send(productData);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "error" })
    }

} 