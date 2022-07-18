const mongoose = require('mongoose');
const { databaseUrl } = require('./settings.json');

exports.connectDatabase = () => mongoose.connect(databaseUrl);