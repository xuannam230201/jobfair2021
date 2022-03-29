const mongoose = require('mongoose');

const Prize = mongoose.model(
  'Prize',
  new mongoose.Schema({
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
    prize: Number,
  }, {
    timestamps: true,
  }),
  'prizes'
);

module.exports = Prize;