const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index.router');
const signupRouter = require('./routes/signup.router');
const signinRouter = require('./routes/signin.router');
const logoutRouter = require('./routes/logout.router');
const postRouter = require('./routes/post.router');
const viewpostRouter = require('./routes/viewpost.router'); // Роутер на конкретный пост
const profileRouter = require('./routes/profile.router'); // Роутер на профиль

const app = express();
const PORT = process.env.PORT ?? 3000;

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'preved',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // 12 hours
  },
};

app.use(session(sessionConfig));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/logout', logoutRouter);
app.use('/post', postRouter);
app.use('/post', viewpostRouter); // Роутер на конкретный пост
app.use('/profile', profileRouter); // Роутер на профиль

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
