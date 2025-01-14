import {mongoose  } from "mongoose";
const connectDB = async ()=>{
try {
    
const connectionInstance =await mongoose.connect("mongodb+srv://poudelanil658:anil1234@cluster0.5c5ii.mongodb.net")
} catch (e) {
console.log(`Mongodb Error`,e)    
}
}

export  default connectDB;
