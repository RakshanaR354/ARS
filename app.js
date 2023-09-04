const dotenv = require("dotenv");
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookiparser = require('cookie-parser');
const cors = require('cors');



const app = express()
dotenv.config({path:'./config.env'});
require('./dev/conn')
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookiparser());
app.use(cors());

var corsOptions = {
    origin:'',
    optionsSuccessStatus:200
}

//Importing Models
const Users = require('./models/userSchema');
const info = require("./models/userSchema");


//Registeration
app.post('/signup',async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new info({
            name:name,
            email:email,
            password:password
        });

        const created = await createUser.save();
        console.log(created);
        res.sendStatus(200);
    }
    catch(e){
        res.send(e);
    }
})

//Login
app.post('/login',async(req,res)=>{
try{
    const email  = req.body.email;
    const password = req.body.password;
    const user = await test.findOne({email:email});
    if(user){
        const isMatch = await bcryptjs.compare(password, user.password);
        if(isMatch){
            const token = await user.generateToken();
            res.cookie("jwt",token,{
                expires : new Date(Date.now() + 86400000),
                httpOnly:true
            })
            res.send("LoggedIN");

            //const {passwords, isAdmin,...otherDetails} = user;
            //res.status(200).json({...otherDetails});
        }
        else{
            res.send('Invalid Credential');
        }
    }else{
        res.send('Invalid credential');
    }
    }
catch(error){
         res.sendStatus(error);
}
})

app.post('/verify',async(req,res)=>{
    const email = req.body.email;
    const name = req.body.name;

    const verifyUser = await info.findOne({name:name});
    if(verifyUser){
        const userEmail = await info.findOne({email:email});

    }
})

app.get('/monitor',cors(corsOptions),async(req,res)=>{
    res.send("Monitor");
})

app.listen(port,()=>{
    console.log("Server is listening")
})