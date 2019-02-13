const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/n3rdstorm');

module.exports = mongoose.connection;
