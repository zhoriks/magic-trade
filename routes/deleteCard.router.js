const router = require('express').Router();
const { Post } = require('../db/models');

router
  .delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const cardId = await Post.findOne({ where: { id: req.params.id } });
    await cardId.destroy({ where: { id: req.params.id } });
    return res.json({ ok: '/' });
  });

module.exports = router;
