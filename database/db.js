import ATLAS_SERVER_LOGIN from './config.js';

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/n3rdstorm');
mongoose.connect(ATLAS_SERVER_LOGIN);

module.exports = mongoose.connection;
