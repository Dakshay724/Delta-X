const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const passwordComplexity=require('joi-password-complexity');
const Joi = require('joi');


const userSchema= new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
year:{type:String,required:true},
gender:{type:String,required:true},
month:{type:String,required:true},
date:{type:String,required:true}
})
userSchema.methods.generateAuthToken=()=>{
    const token =jwt.sign(
        {
            _id:this._id,name:this.name
        },process.env.JWTPRIVATEKEY,{expiresIn:'7d'}

    )
    return token
}

const validate=(user)=>{
    const schema=Joi.object({
        name:Joi.string().min(5).max(10).required(),
email:Joi.string().email().required(),
password:passwordComplexity().required(),
gender:Joi.string().valid('male','female','non-binary').required(),
month:Joi.string().required(),
date:Joi.string().required(),
year:Joi.string().required(),

    })
    return schema.validate(user)
}

const User=mongoose.model('user',userSchema)

module.exports={User,validate}