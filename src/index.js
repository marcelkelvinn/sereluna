require ('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;



const journalRoute = require('./routes/journal');
const articlesRoute = require('./routes/articles');

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Sereluna backend')
});

app.use('/journal', journalRoute);

app.use('/articles', articlesRoute);


app.listen(PORT, () => console.log("Server Started at "+ PORT));

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log('connected to mongoDB')
}).catch(()=>{
    console.log('error')
});