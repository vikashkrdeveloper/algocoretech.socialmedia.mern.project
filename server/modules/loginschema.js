const database = require('../db/connection');
const jwt = require('jsonwebtoken');
const userloginschema = new database.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true

    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true

    },
    username: {
        type: String,
        trim: true,
        unique: true

    },
    phone: {
        type: Number,
        trim: true,
        unique: true

    },
    role: {
        type: Number,
        trim: true,
        default: 0
    },
    address: {
        type: String,
        lowercase: true,
        trim: true

    },
    district: {
        type: String,
        lowercase: true,
        trim: true

    },
    alternateemail: {
        type: String,
        lowercase: true,
        trim: true

    },
    alternatephone: {
        type: Number,
        trim: true

    },
    pincode: {
        type: Number,
        trim: true

    },

    password: {
        type: String,
        trim: true
    },
    tokens: [
        {
            token: {
                type: String,
                trim: true
            }
        }
    ]

}, { timestamps: true })


userloginschema.methods.genratettoken = async function () {

    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECURTY_KEY);
    this.tokens = this.tokens.concat({ "token": token });
    this.save();
    return token;

}

const userloginmodel = database.model('registrationdetails', userloginschema);

module.exports = userloginmodel;