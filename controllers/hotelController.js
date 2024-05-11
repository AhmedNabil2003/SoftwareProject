import hotel from "../models/hotelModel.js";


export const hotel_index = (req,res)=>{
    res.render('Hotels');
}


export const find_hotel = async (req,res)=>{
    const findedhotels = await hotel.find().lean();
    res.send(findedhotels);
}


export const create_hotel = async (req,res)=>{
    await hotel.create({
        name:"my_hotel2",
        location:"cairo",
        rating:5,
    })
    res.send("done");
}

export const hotel_reservation =  async (req,res)=>{
    res.render('reservation');
}