const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({ mes: 'Основная страница' });
});

module.exports = router;
