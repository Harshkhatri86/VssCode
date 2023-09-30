const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const mobileSchema=new Schema({
    UserName:{
        type:String,
        required:true,
    },

    Password:{
        type:String,
        required:true
    },

    Status:{
        type:Boolean,
        default:true
    },

    Role:{
      type:String,
      enum:['salesManager','productionHead', 'productManager','stockManager'],
      required:true
    }


})

const Mobilelogin=mongoose.model('mobile',mobileSchema)
module.exports=Mobilelogin;