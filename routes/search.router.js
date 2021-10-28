const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('serch', { user: req.session.user });
});

module.exports = router;
