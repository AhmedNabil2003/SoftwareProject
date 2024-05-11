import mongoose, { Schema, model } from "mongoose";
import { type } from "os";

const hotelSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
})


const hotel = model('hotel',hotelSchema);
export default hotel;