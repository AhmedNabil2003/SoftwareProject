import hotel from "../models/hotelModel.js";
import jwt from 'jsonwebtoken'


export const hotel_index = async(req,res)=>{
    const findedhotels = await hotel.find();
    res.render('Hotels',{findedhotels});
}
