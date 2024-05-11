import { Router } from "express";
import { create_hotel, find_hotel, hotel_index, hotel_reservation } from "../controllers/hotelController.js";

const hotelrouter = new Router();

hotelrouter.get("/",hotel_index);

hotelrouter.get("/find", find_hotel);

hotelrouter.get("/create",create_hotel);


hotelrouter.get("/reservation",hotel_reservation);



export default hotelrouter;