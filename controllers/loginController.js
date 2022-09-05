const bcryptjs = require('bcryptjs');
const db = require('../database/db');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const user = req.body.user;
    const password = req.body.password;

    if ( !user || !password ) {
      res.render('login', {
        alert: true,
        alertTitle: 'Advertencia',
        alertMessage: 'Ingrese un usuario y contraseña',
        alertIcon: 'Info',
        showConfirmButton: true,
        timer: 1500,
        ruta: 'login'
      })
    } else {
      db.query('SELECT * FROM users WHERE user = ?', [user],
        async (error, results) => {
          const passwordHash = results[0].password;
          const isSuccessComparingPassword = await bcryptjs.compare(password, passwordHash);

          if (  results.length === 0 || !isSuccessComparingPassword ) {
            res.render('login', {
              alert: true,
              alertTitle: 'Error',
              alertMessage: 'Usuario y contraseña incorrectas',
              alertIcon: 'error',
              showConfirmButton: true,
              timer: false,
              ruta: 'login'
            })
          } else {
            // Login successfull
            const id = results[0].id;

            // Generate the token with expiration date
            const token = jwt.sign({ id: id }, process.env.SECRET_KEY, {
              expiresIn: process.env.EXPIRATION_TOKEN
            });

            // Generate the token without expiration date
            // const token = jwt.sign({ id: id }, process.env.SECRET_KEY);

            console.log('TOKEN:'+token+' para el usuario: '+user);

            // Cookies
            const cookiesOptions = {
              expires: new Date(Date.now()+process.env.EXPIRATION_COOKIE * 24 * 60 * 60 * 1000),
              httpOnly: true
            }
            res.cookie('jwt', token, cookiesOptions);
            res.render('login', {
              alert: true,
              alertTitle: 'Bienvenido',
              alertMessage: 'Se ha conectado correctamente!',
              alertIcon: 'success',
              showConfirmButton: false,
              timer: 800,
              ruta: ''
            })
          }
        })
    }
  } catch (error) {
    console.log(error);
  }

}