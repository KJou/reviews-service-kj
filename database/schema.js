const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSummarySchema = new Schema({
  productId: { type: Number, unique: true },
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

module.exports = {
  ReviewSummary: mongoose.model('ReviewSummary', reviewSummarySchema),
  Review: mongoose.model('Review', reviewSchema)
}