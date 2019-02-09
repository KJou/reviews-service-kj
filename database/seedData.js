const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/n3rdstorm', (err, db) => {
  if (err) {
    console.error(err);
  }
  db.dropDatabase();
  db.close();
});

mongoose.connect('mongodb://localhost/n3rdstorm');

const { Schema } = mongoose;

const reviewSummarySchema = new Schema({
  productID: { type: Number, unique: true },
  aggregateRating: Number,
  aggregateFit: String,
  reviews: Array,
}, { collection: 'reviewSummaries' });

const reviewSchema = new Schema({
  rating: Number,
  dateCreated: Date,
  fit: String,
  headline: String,
  body: String,
  username: String,
});

const ReviewSummary = mongoose.model('ReviewSummary', reviewSummarySchema);
const Review = mongoose.model('Review', reviewSchema);

// shared product data:

const sharedProduct1 = new ReviewSummary({
  productID: 1,
  aggregateRating: 0,
  aggregateFit: 'True to size.',
  reviews: [],
});

const sharedProduct2 = new ReviewSummary({
  productID: 2,
  aggregateRating: 4.5,
  aggregateFit: '',
  reviews: [], // 2213
});


const prod3Review1 = new Review({
  rating: 5,
  dateCreated: null,
  fit: 'Runs small',
  headline: 'These boots are siiiick',
  body: 'My boyfriend bought me these boots for our 2-month anniversary. He is the BEST! These BOOTS are the BEST!',
  username: 'BBYGirlXO',
});

const sharedProduct3 = new ReviewSummary({
  productID: 3,
  aggregateRating: 5,
  aggregateFit: 'Runs small; order next size up',
  reviews: [prod3Review1], // 1
});


const sharedProduct4 = new ReviewSummary({
  productID: 4,
  aggregateRating: 5,
  aggregateFit: '',
  reviews: [], // 2
});

const sharedProduct5 = new ReviewSummary({
  productID: 5,
  aggregateRating: 3.5,
  aggregateFit: '',
  reviews: [], // 2
});

sharedProduct1.save((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('successfully saved product 1');
});

sharedProduct3.save((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('successfully saved product 3');
});
