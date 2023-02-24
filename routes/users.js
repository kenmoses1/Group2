const express = require('express');
const router = express.Router();
const userDetails = require('./../models/users');

router.post('/', async function (req, res) {
    const data = new userDetails(
        {
            email: req.body.email,            
            customerName: req.body.customerName,         

        });
        try {
            const dataEntered = await data.save();
            res.status(200).json(dataEntered);
        }
        catch (error) {
            res.status(404).json({message: error.message});

        }
   
});


router.get('/', async function (req, res){
    try {
        const data = await userDetails.find();
        res.status(200).json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }

});

 module.exports = router;