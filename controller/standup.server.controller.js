var standupsnotes = require('../model/standup.server.model');
//create a new note with Save to collection
exports.create = function(req, res){
     var entry = new standupsnotes({
        memberName: req.body.memberName,
        standNotes: req.body.standNotes,
        email: req.body.email,
        project: req.body.project,
     });

     entry.save(function(err){
         if (err){
             var errorMsg = "Please Select Member Name please check";
            res.render('newnotes', {validationErrMsg: errorMsg})
         }else{
            res.redirect('/');
         }
     });

};

exports.getNotes = function(req, res){
    res.render('newnotes', {title: 'New Notes'});
}

//generate a data list 
exports.list = function (req, res){
    var query = standupsnotes.find();

    query.sort({date: 'desc'}).limit(12).exec(function(error, results){
        res.render('index', {title: 'StandUp note list', standUpnotesData: results});
    });
}

//filter the name with result
exports.filterbyName = function (req, res){
    var query = standupsnotes.find();

    var fileterName = req.body.memberNames;

    query.sort({date: 'desc'}).limit(12);

    if(fileterName.length > 0){
        query.where({memberName: fileterName});
    }

    query.exec(function (error, results){
        res.render('index', {standUpnotesData: results });
    });
}



//edit meeting notes
exports.editMeetingNote = function(req, res){
    var query = standupsnotes.findById(req.params.id);

    query.exec(function (error, results){
        res.render('editnotes', {editNotesData: results});
    });
}