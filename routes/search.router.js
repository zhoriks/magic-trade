const router = require('express').Router();
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('search', { user: req.session.user });
});

router.post('/', async (req, res) => {
  const {
    searchCardname: title,
    searchCost: cost,
    searchDamage: damage,
    searchCity: city,
  } = req.body;
  const valid = {};
  if (title) {
    valid.title = title;
  }
  if (cost) {
    valid.cost = cost;
  }
  if (damage) {
    valid.damage = damage;
  }
  if (city) {
    valid.city = city;
  }
  const where = valid;
  console.log(valid);
  const posts = await Post.findAll({
    where,
    raw: true,
  });
  res.render('index', { posts, user: req.session.user });
});

// router.get('/result', async (req, res) => {
//   res.render('index', { user: req.session.user });
// });

module.exports = router;
