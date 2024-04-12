const mongoose = require("mongoose");


const BookingData = new mongoose.Schema(
       {
        shreyashvalue:{
            type:String,
            require:true
        },
        somyavalue:{
            type:String,
            require:true
        },
        Date:{
           type: String,
           require:true,
           unique:true
        },Task1:String,Task2:String,Task3:String,Task4:String,Task5:String
       } 
)

const FinalBooking = new mongoose.model("ssdata",BookingData);

module.exports = FinalBooking;