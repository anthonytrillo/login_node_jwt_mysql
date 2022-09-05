const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const authenticationController = require('../controllers/authenticationController');
const logoutController = require('../controllers/logoutController');

router.get('/', authenticationController.isAuthenticated, (req, res) => {
    res.render('index', { user: req.user });
});

router.get('/login', (req, res) => {
    res.render('login', { alert: false });
});

router.get('/register', (req, res) => {
    res.render('register');
});

// Routes for methods controller
router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/logout', logoutController.logout);

module.exports = router;