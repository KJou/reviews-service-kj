const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/n3rdstorm');
exports.db = mongoose.connection;
