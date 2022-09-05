const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();

// Template engine configurations
app.set('view engine', 'ejs');

// configurations the public folder for static files
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config({ path: '/.env' });

app.use(cookieParser());

app.use('/', require('./routes/router'));

app.use( (req, res, next) => {
    if ( !req.user ) res.header('cache-control', 'private, no-cache, no-store, must-revalidate');
    next();
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
