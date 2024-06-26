import mongoose, { Schema, model } from "mongoose";
import { type } from "os";

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})


const user = model('user',userSchema);
export default user;