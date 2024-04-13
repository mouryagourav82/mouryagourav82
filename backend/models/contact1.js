import { mongoose } from 'mongoose';
// const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  // Same schema definition as in server.js
});

module.exports = mongoose.model('Contact', ContactSchema);
