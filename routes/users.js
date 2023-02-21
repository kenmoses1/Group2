const express = require('express');
const router = express.Router();
const userModel = require('./../models/users');

router.post('/', async function (req, res) {
    const data = new userModel(
        {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,           

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
        const data = await userModel.find();
        res.status(200).json(data);
    }catch (error){
        res.status(404).json({message: error.message});
    }

});

 module.exports = router;