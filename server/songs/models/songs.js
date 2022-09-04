const mongoose=require('mongoose');
const Joi=require('joi');




const songSchema= new mongoose.Schema({
    imgURL:{type:String,required:true},
    name:{type:String,required:true},
    artists:{type:String,required:true},
    dateofRelease:{type:Date,required:true},
    songURL:{type:String,required:true},
    rating:{type:Number,required:true},
})

const validate=(song)=>{
    const schema=Joi.object({
        imgURL:Joi.string().required(),
        name:Joi.string().required(),
        artists:Joi.string().required(),
        dateofRelease:Joi.date().required(),
       songURL:Joi.string().required(),
       rating:Joi.number().required()
    })
    return schema.validate(song)
}

const Song=mongoose.model('song',songSchema)

module.exports={Song,validate}