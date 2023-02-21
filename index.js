require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');


const connectionString = process.env.mongo_url;
let options = {
    family : 4
 };
 
 mongoose.connect(connectionString, options);
 let db = mongoose.connection;
 
 // Check Connection
 db.once('connected', ()=>{
    console.log('Db connected successfully');
 });

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Welcome to Group2');
});
app.use ('/users', userRoutes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});