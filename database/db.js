const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/n3rdstorm');
mongoose.connect('mongodb+srv://kjou:FZFaznvXZibIXzqM@cluster0-n7jhf.mongodb.net/test?retryWrites=true')

module.exports = mongoose.connection;
