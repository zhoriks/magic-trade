const router = require('express').Router();

router.get('/', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res
      .clearCookie('user_sid')
      .send({ mes: 'пользователь вышел' });
  });
});

module.exports = router;
