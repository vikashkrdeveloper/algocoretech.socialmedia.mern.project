const jwt =require('jsonwebtoken');
const database=require('../modules/loginschema');
const authdetaildatasmiddlewara = async (req, res, next) => {
    try {
        const token =req.cookies.jwttokens;
        const verifytoken = await jwt.verify(token,process.env.SECURTY_KEY);
        const rootUser=await database.findOne({_id:verifytoken._id,"tokens.token":token});
        if(!rootUser){
            throw new Error('User not found');
        }
        req.token=token;
        req.rootUser=rootUser;
        req.Userid=rootUser._id;

        next();


    }
    catch (error) {
        res.status(404).send('User not login');
    }

}
module.exports = authdetaildatasmiddlewara;