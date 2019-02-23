const ATLAS_SERVER_LOGIN = require('./config.js');

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/n3rdstorm');
mongoose.connect(ATLAS_SERVER_LOGIN);

module.exports = mongoose.connection;
