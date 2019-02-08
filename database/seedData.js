const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSummarySchema = new Schema({
   productID: {type: Number, unique: true},
   aggregateRating: Number,
   aggregateFit: String,
   reviews: Array
});

const reviewSchema = new Schema({
  Rating: Number,
  Date: Date,
  Fit: String,
  Headline: String,
  Body: String,
  Username: String
});

