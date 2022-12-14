const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect( error => {
    if (error) {
        console.log('Error connecting to database: ' + error)
        return
    } else {
        console.log('Connected to database');
    }
});

module.exports = db;