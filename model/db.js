const mongoose = require("mongoose");
require("./student")
mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser:true},(er)=>{
    if(!er){
        console.log("mongodb connection successfully.");
    }else{
        console.log("arror in db connection",+er);
    }
})
