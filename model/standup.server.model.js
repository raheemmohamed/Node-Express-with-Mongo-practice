const mongoos = require('mongoose');
const Schema = mongoos.Schema;


var validations = [
    function (val){
        return (val.length > 0);
    },

    'Select Memember Name'
];


const standupsnotesSchema = new Schema({
    memberName: {type:String, required:true, validate:validations},
    standNotes: {type: String},
    email: {type: String , required: true },
    project: {type: String},
    date: {type: Date, default: Date.now}    
});

module.exports = mongoos.model('standupsnotes', standupsnotesSchema);