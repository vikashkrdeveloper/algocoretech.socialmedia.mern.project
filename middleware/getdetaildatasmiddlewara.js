
const jwt = require('jsonwebtoken');
const database = require('../modules/loginschema');
const getdetaildatasmiddlewara = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const tokenverify = await jwt.verify(token, process.env.SECURTY_KEY);
        const rootUser = await database.findOne({ _id: tokenverify._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('User not found');
        }
        req.token = token
        req.rootUser = rootUser
        req.Userid = rootUser._id;
        next()

    }
    catch (error) {
        res.status(406).send('User not login');
    }


}
module.exports = getdetaildatasmiddlewara;
