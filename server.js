// This module will simply do the rendering of the databases contents with EJS and express 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');

// initialize bodyParser middleware just in case we send up body objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`User-Message Server UP & LISTENING on PORT: ${PORT}`);
})


app.get('/home', (req,res) => {
    res.render('landingPage');
})