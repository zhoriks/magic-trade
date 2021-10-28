const router = require('express').Router();
const { Post } = require('../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    let userPosts;
    try {
      userPosts = await Post.findAll({ where: { id: req.session.user.id }, raw: true });
    } catch (error) {
      return res.render('error', {
        message: 'Ошибки при получении данных карточки',
        error: {},
      });
    }
    return res.render('testingRoutes', { userPosts }); // Указать имя ХБС
  })

  .put(async (req, res) => {
    let userPost;
    try {

    } catch (error) {

    }
  })

// Добавить ПУТ и ДЕЛИТ

module.exports = router;
