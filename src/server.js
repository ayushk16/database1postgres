/* eslint-disable no-undef */
const express = require('express');
const apiRoutes = require('./arduino/routes.js');


const app = express();
const PORT = 3000;

app.use(express.json());


app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.use('/api/v1/arduino', apiRoutes)

app.listen(PORT, () => {
    console.log("app listening on post " + PORT);
})