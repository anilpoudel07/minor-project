import mongoose,{Schema } from "mongoose";
const gpsModel  = new Schema({
    

    lattitude:{

        type:String,
        default:0,
        required:true, 
    },
    lattitude:{
        type:String,
        default:0,
        required:true
    },
    time:{
        type:String
    }
},{
    timestamps:true})
export const GpsModel = new mongoose.model("gpsModel",gpsModel)
