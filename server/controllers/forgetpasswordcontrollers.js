const hashpasswordfunction = require('../helpers/hash');
const database = require('../modules/loginschema');
const forgetpasswordcontrollers = async (req, res) => {
    try {
        const { email, newpassword, conformpassword } = req.body;
        if (email && newpassword && conformpassword) {
            const finddata = await database.findOne({ email });
            if (finddata) {
                const hashingpassword = await hashpasswordfunction(newpassword);

                if (newpassword === conformpassword) {
                    await database.updateOne({ email }, { password: hashingpassword });
                    res.sendStatus(200)

                }
                else {
                    res.sendStatus(409)

                }

            }
            else {
                res.sendStatus(408)

            }
        }
        else {
            res.sendStatus(500)

        }

    }
    catch (error) {
        res.sendStatus(404)
    }
}
module.exports = forgetpasswordcontrollers;