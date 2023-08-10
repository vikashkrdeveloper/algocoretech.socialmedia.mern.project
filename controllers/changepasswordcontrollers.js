const database = require('../modules/loginschema');
const comparepasswordfunction = require('../helpers/compare');
const hashpasswordfunction = require('../helpers/hash');
const changepasswordcontrollers = async (req, res) => {
    const id = req.params.id;
    const { password, newpassword, newconformpassword } = req.body;
    if (password && newpassword && newconformpassword) {
        const finddata = await database.findOne({ _id: id });
        const databasepassword = finddata.password;
        const comparepassword = await comparepasswordfunction(password, databasepassword);
        const hashpassword = await hashpasswordfunction(newpassword);
        if (comparepassword) {
            if (newpassword === newconformpassword) {
                await database.updateOne({ _id: id }, { password: hashpassword })
                res.sendStatus(200)
            }
            else {
                res.sendStatus(408);

            }
        }
        else {
            res.sendStatus(406)

        }

    }
    else {
        res.sendStatus(500);
    }
}
module.exports = changepasswordcontrollers;