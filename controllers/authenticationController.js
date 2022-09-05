const db = require('../database/db');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.SECRET_KEY);
            db.query('SELECT from users WHERE id = ?', [decoded.id],
                (error, results) => {
                    if ( !results ) return next();
                    req.user = results[0];
                    return next();
                })
        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        res.redirect('/login');
    }
}