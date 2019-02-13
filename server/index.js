const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes.js');

const app = express();
const port = 3003;

app.use(morgan('dev'));

app.use('/:productId/reviews', (req, res, next) => {
  req.productId = req.params.productId;
  next();
}, router);

app.listen(port, () => console.log(`n3rdstorm server listening on port ${port}`));
