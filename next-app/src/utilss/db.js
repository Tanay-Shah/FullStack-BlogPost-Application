import mongoose from "mongoose";

const connect = async () =>{
  try{
   await mongoose.connect(process.env.MONGO)
   console.log("CONNECTED");

  } catch(error){
    console.log("failed");
    throw new Error("conntion failed");
  }
};

export default connect
