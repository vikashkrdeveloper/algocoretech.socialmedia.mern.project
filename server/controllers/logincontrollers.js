const comparepasswordfunction = require('../helpers/compare');
const database = require('../modules/loginschema');
const logincontrollers = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const finddata = await database.findOne({ email })
            if (finddata) {
                const comparepassword = await comparepasswordfunction(password, finddata.password);
                if (comparepassword) {
                    const token = await finddata.genratettoken();
                    res.cookie('jwttokens', token);
                    res.status(200).send('Login sucessfully');
                }
                else {
                    res.status(409).send('Invalid login details');
                }

            }
            else {
                res.status(408).send('Invalid login details');

            }
        }
        else {
            res.status(500).send("All field require");
        }

    }
    catch (error) {
        res.status(403).send('Some technical issue');
    }

}
module.exports = logincontrollers;