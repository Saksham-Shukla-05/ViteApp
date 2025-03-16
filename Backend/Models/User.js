import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:""
    },
    answer:{
        type:String,
        required:true
    },
    role:{
        type:number,
        default:0
    }
})

export default mongoose.model('User',userSchema);