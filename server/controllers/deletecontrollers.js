const database = require('../modules/loginschema');
const deletecontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        await database.deleteOne({ _id: id })
        res.status(200).send('Profile deleted ')
    }
    catch (error) {
        res.status(404).send('Some technical issue')

    }


}
module.exports = deletecontrollers;