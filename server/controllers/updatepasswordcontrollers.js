const database = require('../modules/loginschema');
const updatepasswordcontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        const { address, district, pincode, phone, alternateemail, alternatephone } = req.body;
        if (address && district && pincode && phone && alternateemail && alternatephone) {
            await database.updateOne({ _id: id }, { address, district, pincode, phone, alternateemail, alternatephone });
            res.sendStatus(200);

        }
        else {

            res.sendStatus(500);
        }

    }
    catch (error) {
        res.sendStatus(404);
    }

}
module.exports = updatepasswordcontrollers;