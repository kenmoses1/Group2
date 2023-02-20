const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email:{required:true, type:String},
    fisrtName:{required:true, type:String},
    lastName:{required:true, type:String},
    password:{required:true, type:String}

});

module.exports = mongoose.model('group2', userModel);