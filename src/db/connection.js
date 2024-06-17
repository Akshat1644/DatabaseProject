const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/akdynamic").then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("No connection");
})