const router = require('express').Router();

router.get('/:postId', async (req, res) => {
  res.render('viewPost', { user: req.session.user });
});

module.exports = router;
