const mongoose=require('../db/connection');

 const messageschema=new  mongoose.Schema({
    username:{
        type:String,
        trim:true,
        lowercase:true
    },
    message:{
        type:String,
        trim:true
    },
    like:{
        type:Number,
        default:0,
        trim:true
    }

},{timestamps:true})

const messagemodule= mongoose.model('messagepost',messageschema);

module.exports=messagemodule;