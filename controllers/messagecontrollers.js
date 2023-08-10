const database = require('../modules/messageschema')
const messagecontrollers = async (req, res) => {
    try{
        const { message, username } = req.body;
        if (message && username) {
            const insertdata =new database({ message, username });
            await insertdata.save();
            res.sendStatus(200);
          
        }
        else {
            res.sendStatus(500);
    
        }
    }
    catch(error){
        res.sendStatus(404);

    }


}
module.exports = messagecontrollers;