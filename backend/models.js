const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  notificationEmail: String,
});

const scanSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  frequency: String,
  target: String,
});

const resultSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  result: String,
  timestamp: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
const Scan = mongoose.model('Scan', scanSchema);
const Result = mongoose.model('Result', resultSchema);

module.exports = { User, Scan, Result };
