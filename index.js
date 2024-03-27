const express = require('express')
const app  = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const person = require('./models/person');
const menuitem = require('./models/menuitem');

app.get('/',function(req,res){

    res.send('welcome to my hotel....how cann i help you?')
})

app.post('/person', async (req,res) =>{

    try{
        const data = req.body

        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'intenal server error'})
    }
})

app.get('/person/:worktype', async (req,res) =>{

    try{
        const worktype = req.params.worktype; // //extract the worktype from the url parameter
    if(worktype == 'chef'|| worktype == 'manager' || worktype == 'waiter'){
        const response = await person.find({work: worktype});
        console.log('response fetched');
        res.status(200).json(response);
    }else{
        res.status(404).json({error: 'invalid woktype'})
    }
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'iteral server error'})
    }
    
})

app.post('/menu',async (req,res) =>{

    try{
        const data = req.body
        const newmenu = new menuitem(data);
        const response = newmenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'intenal server error'})
    }
    
})

app.get('/menu', async (req,res)=>{

    try{
        const data = await menuitem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){

        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }

})

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})









