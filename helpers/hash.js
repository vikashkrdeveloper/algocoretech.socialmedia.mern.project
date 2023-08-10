const bcrypt = require('bcrypt');
const hashpasswordfunction = async (password) => {
    try {
        const salt = 12;
        const hashpassword = await bcrypt.hash(password, salt);
        return hashpassword;

    }
    catch (error) {
        console.log(error)
    }


}
module.exports = hashpasswordfunction;