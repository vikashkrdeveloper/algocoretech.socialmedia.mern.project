const authcontrollers=(req,res)=>{
    res.send(req.rootUser);
    

}
module.exports=authcontrollers;