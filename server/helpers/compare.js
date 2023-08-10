const bcrypt = require('bcrypt');
const comparepasswordfunction = async (password, hashpasword) => {
    try {

        const comparepassword = await bcrypt.compare(password, hashpasword);
        return comparepassword;
    }
    catch (error) {
        console.log(error)
    }

}
module.exports = comparepasswordfunction