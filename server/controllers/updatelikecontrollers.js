const database = require('../modules/messageschema');
const updatelikecontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        const { getlike } = req.body;
        await database.updateOne({ _id: id }, { like: getlike });
        res.sendStatus(200)

    }
    catch (error) {
        res.sendStatus(404)
    }
}
module.exports = updatelikecontrollers;