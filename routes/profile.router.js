const router = require('express').Router();
const { Post, User } = require('../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    let userPosts;
    let users;
    try {
      userPosts = await Post.findAll({ where: { UserId: req.session.user.id }, raw: true });
      users = await User.findOne({ where: { id: req.session.user.id }, raw: true });
    } catch (error) {
      return res.render('error', {
        message: 'Ошибка при получении карточек пользователя',
        error: {},
      });
    }
    return res.render('profile', { userPosts, users, user: req.session.user });
  });

module.exports = router;
