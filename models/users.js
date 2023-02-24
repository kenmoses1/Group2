const mongoose = require('mongoose');

//schema
const userDetails = new mongoose.Schema({
    email:{required:true, type:String},
    customerName:{required:true, type:String}   
    

});

module.exports = mongoose.model('users', userDetails);