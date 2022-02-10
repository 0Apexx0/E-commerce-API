const mongoose = require('mongoose');
const sequencing = require('../model/id_counter');

const autoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({

    id : Number,
    name : {
        type : String,
       require : true 
    },
    quantity : {
        type : Number,
        required : true
    }

},{
    _id : false
});

productSchema.plugin(autoIncrement);
productSchema.pre("save", function (next) {
    let doc = this;
    sequencing.getSequenceNextValue("product_id").
    then(counter => {
        // console.log("asdasd", counter);
        if(!counter) {
            sequencing.insertCounter("product_id")
            .then(counter => {
                doc.id = counter;
                console.log(doc)
                next();
            })
            .catch(error => next(error))
        } else {
            doc.id = counter;
            next();
        }
    })
    .catch(error => next(error))
});

const Product = mongoose.model('Product' , productSchema);

module.exports = Product ;