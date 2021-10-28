const router = require('express').Router();
const { Post, User } = require('../db/models');

router
  .route('/:postId')
  .get(async (req, res) => {
    let post;
    let userEmail;
    let isSame;
    try {
      post = await Post.findOne({ where: { id: req.params.postId }, raw: true, include: User });
      userEmail = post['User.email'];
    } catch (error) {
      return res.render('error', {
        message: 'Ошибки при получении данных карточки',
        error: {},
      });
    }

    if (req.session.user?.id === post.UserId) {
      isSame = true;
      return res.render('viewPost', {
        post, isSame, userEmail, user: req.session.user,
      });
    }
    isSame = false;
    return res.render('viewPost', { post, userEmail, user: req.session.user });
  });

router
  .route('/:postId/edit')
  .get((req, res) => {
    res.render('editPost'); // Прописать редирект
  })
  .put(async (req, res) => {
    let userPost;
    try {
      userPost = await Post.update({
        title: req.body.title,
        damage: req.body.damage,
        cost: req.body.cost,
        city: req.body.city,
      },
      {
        where: {
          id: req.params.postId,
        },
      });
    } catch (error) {
      return res.render('error', {
        message: 'Ошибка изменения данных в карточке',
        error: {},
      });
    }
    return res.json({ userPost });
  });

// Добавить ПУТ и ДЕЛИТ

module.exports = router;
