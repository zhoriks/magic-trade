const router = require('express').Router();
const { Post, User } = require('../db/models');

router
  .route('/:postId')
  .get(async (req, res) => {
    let post;
    let isSame;
    try {
      post = await Post.findOne({ where: { id: req.params.postId }, raw: true, include: User });
    } catch (error) {
      return res.render('error', {
        message: 'Ошибки при получении данных карточки',
        error: {},
      });
    }
    if (req.session.user?.id === post.UserId) {
      isSame = true;
      return res.render('viewPost', {
        post, isSame, user: req.session.user,
      });
    }
    isSame = false;
    return res.render('viewPost', { post, user: req.session.user });
  });

module.exports = router;
