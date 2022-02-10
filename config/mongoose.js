const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/E-commerce_API_db');


const db = mongoose.connection;

db.on('error', console.error.bind(console , 'Error connecting to the Database'));

db.once('open', ()=>{

    console.log('Connected to the Database successfully');

});

module.exports = db;