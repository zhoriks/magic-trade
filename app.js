const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
