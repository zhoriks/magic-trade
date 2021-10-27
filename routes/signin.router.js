const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.send({ mes: 'страница с логин формой' });
  })
  .post(async (req, res) => {
    const {
      email,
      password,
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
        return res.send({ mes: 'логин успешный' });
      }
    } else return res.send({ mes: 'логин не успешный' });
  });

module.exports = router;
