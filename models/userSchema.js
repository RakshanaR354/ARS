const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


//Schemma for register and login

const userSchema = new mongoose.Schema({
    name:{
     type:String,
     required:true,
     unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    desmokeocc:[
    {
        desmoke:{
            type:String
        }
    }
    ],
    token:[
        {
            token:{
                type:Array,
                required:true
            }
        }
    ]
},{timestamps:true});

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.passwords = bcryptjs.hashSync(this.passwords,10);
    }
    next();
})


// Generate Tokens to Verify User
userSchema.methods.generateToken = async function(){
    try{
        let generateToken = jwt.sign({_id : this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generateToken});
        await this.save();
        return generateToken;
    } catch (error){
          console.log(error)
    }
}


// create Model
const info = new mongoose.model("Info",userSchema);
module.exports = info;