const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3003;

app.use(morgan('dev'));

app.get('/:productId/reviews', (req, res) => {
  res.send(req.params);
})

app.listen(port, () => console.log(`n3rdstorm server listening on port ${port}`));