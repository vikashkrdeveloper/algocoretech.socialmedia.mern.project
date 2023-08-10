const database = require('../modules/loginschema');
const allusercontrollers = async (req, res) => {
    try {
        const finddata = await database.find();
        res.send(finddata)

    }
    catch (error) {
        res.status(404).send('Some technical issue')
    }
}
module.exports = allusercontrollers;