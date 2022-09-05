const express = require('express');
const router = express.Router();

const db = require('../database/db');
const registerController = require('../controllers/registerController');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

// Routes for methods controller\
router.post('/register', registerController.register);

module.exports = router;