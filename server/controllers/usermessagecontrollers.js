const database = require('../modules/messageschema');

const usermessagecontrollers = async (req, res) => {
    try {
        const username=req.params.username;
        const fetchdata = await database.find({username});
        res.send(fetchdata);
    }
    catch (error) {

    }
}
module.exports = usermessagecontrollers;