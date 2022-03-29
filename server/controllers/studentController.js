const mongoose = require('mongoose');
const Student = require('../models/student');
const Prize = require('../models/prize');

exports.searchStudent = async(req, res) => {
  try {
    let student = await Student.findOneAndUpdate({id: req.params.id},
      {$set: {
        'status': 1,
        'wheelStatus': 1,
      }},
    );
    if(!student) {
      student = await Student.findOneAndUpdate({id: 'TN' + req.params.id},
        {$set: {
          'status': 1,
          'wheelStatus': 1,
          'surname': '',
          'firstname': '',
        }},
        {upsert: true, returnOriginal: false},
      );
    }
    return res.json({student: student});
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

exports.completeStudent = async(req, res) => {
  try {
    const student = await Student.findOneAndUpdate({id: req.params.id, 'status': 1}, 
      {$set: {
        'status': 2,
        'wheelStatus': 0,
      }} 
    );
    return res.json({student: student}); 
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

exports.initLiveStudent = async(req, res) => {
  try {
    const student = await Student.find({$or: [{'status': 1}, {'status': 2}]}).sort({updatedAt: 'desc'}).limit(10);
    return res.json({student: student});
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

exports.countStudent = async(req, res) => {
  try {
    const number = await Student.find({$or: [{'status': 1}, {'status': 2}]}).count();
    return res.json({number: number});
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

exports.getStudents = async(req, res) => {
  try {
    const students = await Student.find({$and: [{'status': 1}, {wheelStatus: 1}]});
    return res.json({students: students});
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

exports.changeWheelStudents = async(req, res) => {
  try {
    const list = req.body.list;
    list.forEach(async(item) => {
      await Student.findOneAndUpdate({id: item}, {wheelStatus: 0});
    });
    return res.json({msg: 'Success'});
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

exports.setPrize = async(req, res) => {
  try {
    const studentId = req.body.id;
    const student = await Student.findOne({id: studentId});
    const id = student._id;
    await Prize.findOneAndUpdate({prize: req.body.prize}, {$set: {
      student: id,
    }}, {
      upsert: true,
    });
    return res.json({msg: 'Success'});
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

exports.getPrizes = async(req, res) => {
  try {
    const prizes = await Prize.find().populate('student');
    return res.json({prizes: prizes});
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}