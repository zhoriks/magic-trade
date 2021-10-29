const router = require('express').Router();
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  const posts = await Post.findAll({ raw: true });
  res.render('index', { posts, user: req.session.user });
});

module.exports = router;
