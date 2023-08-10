const express = require('express');
require('dotenv').config();
const cookieparser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;
const route = require('../router/routes');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser())
app.use(route);
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.all('*', (req, res) => {
    res.status(200).send('Ooops page not found');
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
