const mongoose=require("mongoose");
const produtSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
});
module.exports=mongoose.model("productEntity",produtSchema,product);