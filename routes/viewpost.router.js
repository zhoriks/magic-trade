const router = require('express').Router();
const { Post } = require('../db/models');

router
  .route('/:postId')
  .get(async (req, res) => {
    let post;
    try {
      post = await Post.findOne({ where: { id: req.params.postId }, raw: true });
    } catch (error) {
      return res.render('error', {
        message: 'Ошибки при получении данных карточки',
        error: {},
      });
    }
    return res.render('viewPost', { post, user: req.session.user });
  });

module.exports = router;
