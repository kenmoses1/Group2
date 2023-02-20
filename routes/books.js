const express = require('express');
const router = express.Router();
const bookModel = require('./../models/books');

router.post('/add-book', async function (req, res) {
    const data = new bookModel(
        {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher
        });
        try {
            const dataEntered = await data.save();
            res.status(200).json(dataEntered);
        }
        catch (error) {
            res.status(500).json({message: error.message});

        }
   
});

router.get('/get-all-books', async function (req, res){
    try {
        const data = await bookModel.find();
        res.status(200).json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }

});

 module.exports = router;