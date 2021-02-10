const express = require("express");

const app = express()
require("./model/db")
require("./model/student")


const router = require("./routes/router")
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/",router)

app.listen(3000,()=>{
    console.log(`server is running on ${3000}`);
})