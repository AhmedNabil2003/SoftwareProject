import reservation from "../models/reservationModel.js";
import jwt from 'jsonwebtoken'

 
export const show_reservation_screen = (req,res)=>{
    const {token} = req.cookies;
    const decoded = jwt.verify(token,'sh');
    res.render('reservation',{decoded});
}



export const store_reservation = async(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const hotelName = req.body.hotelName
    const checkInDate = req.body.checkInDate
    const checkOutDate = req.body.checkOutDate
    const rooms = req.body.rooms

   await reservation.create({
    name,
    email,
    hotelName,
    checkInDate,
    checkOutDate,
    rooms,
   })
   res.redirect('/hotel');
}