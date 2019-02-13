const db = require('../../database/db.js');
const { ReviewSummary } = require('../../database/schema.js');

// take productId input from req.productId
// query the db for the reviews
// return the reviewsummary object in the response

module.exports = {
  get: (productId, callback) => {
    ReviewSummary.find({ productId })
      .then((result) => {
        callback(null, result);
      }, (error) => {
        callback(error);
      });
  },
}
