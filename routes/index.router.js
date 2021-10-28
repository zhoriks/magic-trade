const router = require('express').Router();
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  const posts = await Post.findAll({ raw: true });
  console.log(posts);

  res.render('index', { posts });
});

module.exports = router;
