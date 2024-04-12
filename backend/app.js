require("dotenv").config();
const express = require("express");
const app = express();
const port = 1234|| process.env.PORT;
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const ssdata = require("./src/models/userdata");
app.use(cors(
    {
      origin:"https://task1-psi-bice.vercel.app",
      methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
      credentials: true,
    }
  ));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/setdata",async(req,res)=>{
    try {

        const {Date,Task1,Task2,Task3,Task4,Task5} = req.body;
        const value = "0";
        const response = await ssdata.create({Date,Task1,Task2,Task3,Task4,Task5,shreyashvalue:value,somyavalue:value})
        res.sendStatus(202);
    } catch (error) {
        console.log(error);
        res.sendStatus(404)
    }

})
app.post("/updatedata/:name",async(req,res)=>{
    try {
      const name = req.params.name;
        let {id,value} = req.body;
        console.log(value)
        if(value === "1"){
          value = "0"
        }
        else{
          value = "1"
        }
        console.log(value)
        if(name==="Shreyash"){
          const response = await ssdata.findByIdAndUpdate({_id:id},{
            $set:{shreyashvalue:value}   
        })
        const result = await ssdata.find({},"-somyavalue")
        res.status(202).json({result});
        }
        else{
          const response = await ssdata.findByIdAndUpdate({_id:id},{
            $set:{somyavalue:value}   
        })
        const result = await ssdata.find({},"-shreyashvalue")
        res.status(202).json({result});
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(404)
    }

})
app.get("/getdata/:name",async(req,res)=>{
    try {
      const name = req.params.name;
      if(name==="Shreyash"){
        const result = await ssdata.find({},"-somyavalue")
        res.json(result).status(202);
      }else{
        const result = await ssdata.find({},"-shreyashvalue")
        res.json(result).status(202);
      }
    } catch (error) {
        console.log(error);
        res.sendStatus(404)
    }

})
mongoose.connect(process.env.Connection_Url)
  .then(() => {
    console.log(" Data-Base connection sucessfully....")

  })
  .catch((e) => { console.log(e) })



app.listen(port,()=>{
    console.log("Connect successfully...")
})