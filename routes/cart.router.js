const router = require('express').Router();
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('cart', { user: req.session.user, cart: req.session.cart.cart });
});

router.post('/:id', async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { cart } = req.session.cart;
  cart.push(post);
  console.log(req.session.cart.cart);
  res.redirect('/cart'); // логика добавление в корзину
});

module.exports = router;
