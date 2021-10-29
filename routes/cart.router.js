const router = require('express').Router();
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  console.log(req.session.user.cart);
  res.render('cart', { user: req.session.user });
});

router.post('/:id', async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id,
    },
    raw: true,
  });
  // const { cart } = req.session.user;
  req.session.user.cart.push(post);
  console.log(req.session.user);
  res.redirect('/cart');
});

module.exports = router;
