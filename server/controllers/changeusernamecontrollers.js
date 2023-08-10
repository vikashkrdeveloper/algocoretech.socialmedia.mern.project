const database = require('../modules/loginschema')
const changeusernamecontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        const { username, newusername } = req.body;
        if (username, newusername) {

            const finddata = await database.findOne({ newusername });
            const findusername = await database.findOne({ username });
            if (finddata) {
                res.sendStatus(403);
            }
            else {

                if (findusername) {
                    const update = await database.updateOne({ _id: id }, { username: newusername });
                    res.sendStatus(200);
                }
                else {

                    res.sendStatus(406);

                }

            }

        }
        else {
            res.sendStatus(500);
        }
    }
    catch (error) {
        res.sendStatus(407);
    }

}
module.exports = changeusernamecontrollers;