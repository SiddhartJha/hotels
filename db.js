const mongoose = require('mongoose')
require('dotenv').config();


//const mongoURL = 'mongodb://localhost:27017/hotels'
//const mongoURL = 'mongodb+srv://jhasiddharth2211:Shashnk12@cluster0.xhrfv.mongodb.net/'
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL,{

    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', ()=>{
     console.log('connected to mongodb server');
});

db.on('error', (err)=>{
    console.log('mongodb connection error:',err);
});

db.on('disconnected', ()=>{
    console.log('mongodb disconnected');
});

module.exports = db;