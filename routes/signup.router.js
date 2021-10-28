const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('signupForm');
  })
  .post(async (req, res) => {
    console.log(req.body);
    const {
      signupUsername: login,
      signupPassword: password,
      signupEmail: email,
      signupCity: city,
    } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      login,
      password: hash,
      email,
      city,
    });
    res.redirect('/');
    // добавить окно успешной регистрации
  });

module.exports = router;
