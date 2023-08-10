const database = require('../modules/loginschema');
const hashingpasswordfun = require('../helpers/hash');
const registercontrollers = async (req, res) => {
    try {
        const { name, email, username, phone, password, conformpassword } = req.body;
        if (name && email && username && phone && password && conformpassword) {
            const finddata = await database.findOne({ email })
            const findphone = await database.findOne({ phone })
            const findusername = await database.findOne({username })
            if (finddata) {
                res.status(401).send('Email id already exist');

            }
            else {
                if (findphone) {
                    res.status(406).send('Phone number already exist');

                }

                else {
                    if (findusername) {
                        res.status(408).send('User name already exist');

                    }
                    else {

                        if (password === conformpassword) {
                            const hashpassword = await hashingpasswordfun(password);
                            const insertdata = new database({ name, email, username, phone, password: hashpassword });
                            await insertdata.save();
                            res.status(200).send(' Registration Sucessfully');
                        }
                        else {
                            res.status(405).send('Password and conform password are not mached');

                        }
                    }
                }


            }
        }
        else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        console.log(error)
        res.status(403).send('Some technical issue' + error);
    }


}
module.exports = registercontrollers;