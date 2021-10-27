const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('signupForm');
  })
  .post(async (req, res) => {
    const {
      login,
      password,
      email,
      city,
    } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      login,
      password: hash,
      email,
      city,
    });
    res.json(user);
  });

module.exports = router;
