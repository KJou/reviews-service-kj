const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./db.js');
const {Review} = require('./schema.js');
const {ReviewSummary} = require('./schema.js');

const sharedProduct1 = new ReviewSummary({
  productId: 1,
  aggregateRating: 0,
  aggregateFit: 'True to size.',
  reviews: [],
});

const sharedProduct2 = new ReviewSummary({
  productId: 2,
  aggregateRating: 4.5,
  aggregateFit: '',
  reviews: [], // 2213
});

const prod3Review1 = new Review({
  rating: 5,
  dateCreated: faker.date.past(),
  fit: 'Runs small',
  headline: 'These boots are siiiick',
  body: 'My boyfriend bought me these boots for our 2-month anniversary. He is the BEST! These BOOTS are the BEST!',
  username: 'BBYGirlXO',
});

const sharedProduct3 = new ReviewSummary({
  productId: 3,
  aggregateRating: 5,
  aggregateFit: 'Runs small; order next size up',
  reviews: [prod3Review1], // 1
});

const sharedProduct4 = new ReviewSummary({
  productId: 4,
  aggregateRating: 5,
  aggregateFit: '',
  reviews: [], // 2
});

const sharedProduct5 = new ReviewSummary({
  productId: 5,
  aggregateRating: 3.5,
  aggregateFit: '',
  reviews: [], // 2
});

const Promises = [
  sharedProduct1.save(),
  sharedProduct2.save(),
  sharedProduct3.save(),
  sharedProduct4.save(),
  sharedProduct5.save(),
];

const clearThenSeedDb = () => {
  db.dropDatabase()
    .then(() => Promise.all(Promises))
    .then(() => mongoose.disconnect())
    .catch(err => console.log(err));
};

clearThenSeedDb();