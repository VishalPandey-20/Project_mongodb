const express = require("express");

const router = express.Router();
const student_data = require('../model/student')
const db = require("../model/db")





router.post("/",(req,res)=>{
    console.log(req.body);
    const myData = new student_data(req.body)
    myData.save().then((data)=>{
        res.send(data);
        console.log("inster successfully");
        console.log(data);
    }).catch((er)=>{
        console.log(er);
    })
})

router.get("/filter",(req,res)=>{
    student_data.find()
    .then((data)=>{
        res.send(data);
        console.log(data);
    }).catch((er)=>{
        console.log(er);
    })
})

router.get("/title",(req,res)=>{
    student_data.find({title:req.body.title}).then((data)=>{
        res.send(data);
        console.log(data);
    }).catch((er)=>{
        console.log(er);
    })
})

router.get("/Description",(req,res)=>{
    student_data.find({Description:req.body.Description}).then((data)=>{
        res.send(data);
        console.log(data);
    }).catch((er)=>{
        console.log(er);
    })
})


router.get("/start",(req,res)=>{
    student_data.find({start:req.body.start}).then((data)=>{
        res.send(data);
        console.log(data);
    }).catch((er)=>{
        console.log(er);
    })
})
module.exports = router