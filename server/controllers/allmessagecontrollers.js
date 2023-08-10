const database = require('../modules/messageschema');
const allmessagecontrollers = async (req, res) => {
    try {
        const fetchdata = await database.find();
        res.send(fetchdata);

    }
    catch (error) {
        res.sendStatus(404);

    }
}
module.exports = allmessagecontrollers;