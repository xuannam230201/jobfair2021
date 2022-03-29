var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController');

/* GET users listing. */

router.get('/out/:id', studentController.completeStudent);

router.get('/getLive', studentController.initLiveStudent);

router.get('/count', studentController.countStudent);

router.get('/wheel', studentController.getStudents);

router.post('/wheel/delete', studentController.changeWheelStudents);

router.post('/prize/set', studentController.setPrize);

router.get('/prize', studentController.getPrizes);

router.get('/:id', studentController.searchStudent);

module.exports = router;
