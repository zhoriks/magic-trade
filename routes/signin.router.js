const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('signinForm');
  })
  // eslint-disable-next-line consistent-return
  .post(async (req, res) => {
    const {
      signinEmail: email,
      signinPassword: password,
    } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        req.session.user = { username: user.login, id: user.id };
        return res.redirect('/');
      }
    } else return res.redirect('/');
  });

// добавить ошибки при не правильном логине и пароле

module.exports = router;
