const express = require('express');
const route = express.Router();
const homepagecontrollers = require('../controllers/homepagecontrollers');
const registercontrollers = require('../controllers/registercontrollers');
const logincontrollers = require('../controllers/logincontrollers');
const authdetailsmiddlewara = require('../middleware/authdetailsmiddlewara');
const logoutcontrollers = require('../controllers/logoutcontrollers');
const authcontrollers = require('../controllers/authcontrollers');
const authdetaildatasmiddlewara = require('../middleware/authdetaildatasmiddlewara');
const qrcodegenrate = require('../controllers/qrcodegenrate')
const deletecontrollers = require('../controllers/deletecontrollers')
const getdetaildatasmiddlewara = require('../middleware/getdetaildatasmiddlewara');
const allusercontrollers = require('../controllers/allusercontrollers');
const messagecontrollers = require('../controllers/messagecontrollers');
const changepasswordcontrollers = require('../controllers/changepasswordcontrollers');
const changeusernamecontrollers = require('../controllers/changeusernamecontrollers');
const updatepasswordcontrollers = require('../controllers/updatepasswordcontrollers');
const forgetpasswordcontrollers = require('../controllers/forgetpasswordcontrollers');
const allmessagecontrollers = require('../controllers/allmessagecontrollers');
const updatelikecontrollers = require('../controllers/updatelikecontrollers');
const usermessagecontrollers = require('../controllers/usermessagecontrollers');
route.get('/', authdetailsmiddlewara, homepagecontrollers);
route.get('/authdata', authdetaildatasmiddlewara, authcontrollers);
route.get('/alluserdata', allusercontrollers);
route.get('/getallmessage', allmessagecontrollers);
route.post('/register', registercontrollers);
route.post('/login', logincontrollers);
route.delete('/profile/delete/:id', deletecontrollers);
route.get('/logout', logoutcontrollers);
route.post('/userqrcode', qrcodegenrate);
route.post('/message', messagecontrollers);
route.put('/changepassword/:id', changepasswordcontrollers);
route.put('/changeusername/:id', changeusernamecontrollers);
route.put('/profile/update/:id', updatepasswordcontrollers);
route.put('/getallmessage/:id', updatelikecontrollers);
route.get('/usermessage/:username', usermessagecontrollers);
route.post('/forgetpassword', forgetpasswordcontrollers);


module.exports = route;