const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const db = require('../database/db');
const { promisify } = require('util');

exports.register = async (req, res) => {
    try {
        const name = req.body.name;
        const user = req.body.user;
        const password = req.body.password;
        let passwordHash = await bcryptjs.hash(password, 8);

        db.query(
            'INSERT INTO users SET ?',
            {
                user: user,
                name: name,
                password: passwordHash
            },
            (error, results) => {
                if (error) {
                    console.log(error);
                }
                res.redirect('/')
            }
        )
    } catch (error) {
        console.log(error);
    }

}