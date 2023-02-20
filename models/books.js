const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    title:{required:true, type:String},
    author:{required:true, type:String},
    publisher:{required:true, type:String}
});

module.exports = mongoose.model('books', bookModel);