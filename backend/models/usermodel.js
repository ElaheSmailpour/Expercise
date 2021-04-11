const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = new Schema(
    {

        
       username:{
           type:String,
           required:true,
          unique:true,
          trim:true,
          minlength:3
        },
    },
       {
           timestamps:true,
       }
    
    
);

module.exports = mongoose.model("userschema", userschema);