var express = require('express');
var router = express.Router();
var standupCtrl = require('../controller/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  return standupCtrl.list(req, res);
});

router.post('/', function(req, res){
  return standupCtrl.filterbyName(req, res);
});


/* GET new notes */
router.get('/createNotes', function(req, res) {
  return standupCtrl.getNotes(req, res);
});

/* POST NEW Notes*/
router.post('/newnotes', function(req, res){
  return standupCtrl.create(req, res);
});

//update a meeting notes
router.get('/editNotes/:id', function(req, res){
  return standupCtrl.editMeetingNote(req, res);
});

module.exports = router;
