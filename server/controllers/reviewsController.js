const models = require('../models/reviews.js');

module.exports = {
  get: function(req, res) {
    models.get(req.productId, (error, data) => {
      if (error) {
        console.error('Database Error: ', error);
        return;
      }
      res.status(200).send(data);
    });
  }
}