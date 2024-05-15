import mongoose, { Schema, model } from "mongoose";


const reservationSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    hotelName:{
        type:String,
        required: true,
    },
    checkInDate:{
        type: Date,
        required: true,
    },
    checkOutDate:{
        type: Date,
        required: true,
    },
    rooms:{
        type: Number,
        required: true,
    },
})


const reservation = model('reservation',reservationSchema);
export default reservation;