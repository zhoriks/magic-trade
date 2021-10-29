const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/images');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

const upload = multer({ storage });

const { Post } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('postForm', { user: req.session.user });
  })
  // eslint-disable-next-line consistent-return
  .post(upload.single('postPicture'), async (req, res) => {
    const {
      postCardname: cardname,
      postCost: cost,
      postDamage: damage,
      postCity: city,
    } = req.body;
    const picture = req.file.filename;
    const post = await Post.create({
      title: cardname,
      cost,
      damage,
      city,
      picturePath: picture,
      UserId: req.session.user.id,
    });
    res.redirect('/');
  });

// добавить ошибки при не правильном логине и пароле

module.exports = router;
