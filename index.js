require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const PORT = process.env.PORT;
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
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});
app.use ('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});