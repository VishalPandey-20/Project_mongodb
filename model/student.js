const mongoose = require("mongoose");
var studentScema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:4,
        maxlength:80
    },
    description:{
        type:String,
        required:true,
        minlength:15,
        maxlength:600
    },
    maxNumberOfStudents:{
        type:Number,
        required:true,
        min:1,
        
    },
    type:{
        type:String,
        required:true
    },
    start:{
        type: Date,
		default: new Date(new Date()),
    },
    end:{
        type: Date,
		default: new Date(new Date()),
    }
})

var student_data = mongoose.model('student_data',studentScema);
module.exports = student_data

// var now = new Date();
//     db.data.save( { date: now, 
//     offset: now.getTimezoneOffset() } );