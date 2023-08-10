const logoutcontrollers =async (req,res) => {
    try{
        res.clearCookie("jwttokens")
        res.status(200).send('Logout sucessfully');
    }
    catch(error){
        res.status(404).send('Some technical issues');
    }


}
module.exports = logoutcontrollers;