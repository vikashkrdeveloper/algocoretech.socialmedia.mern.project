const mongoose=require('mongoose');
const databaseaddress=process.env.DATABASE_ADDRESS;
mongoose.connect(databaseaddress)
.then(()=>{
    console.log('Database connected');

})
.catch((error)=>{
console.log('Not connected'+error);
})
module.exports=mongoose;