const mongoose=require("mongoose");

const connectDB=async()=>{
    return mongoose
    .connect("mongodb+srv://admin:admin@jyothiscluster.oyazb86.mongodb.net/contact_mern")
    .then(()=>console.log("database connected succesfully"))
    .catch((err)=>console.log(err));
};

module.exports=connectDB;