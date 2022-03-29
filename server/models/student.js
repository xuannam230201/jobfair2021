const mongoose = require('mongoose');

const Student = mongoose.model(
  'Student',
  new mongoose.Schema({
    id: String,
    surname: String,
    firstname: String,
    year: String,
    class: String,
    status: Number,
    wheelStatus: Number,
    prize: Number,
  }, {
    timestamps: true,
  }),
  'students'
);

module.exports = Student;