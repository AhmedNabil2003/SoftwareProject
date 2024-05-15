import { Router } from "express";
import {  hotel_index } from "../controllers/hotelController.js";

const hotelrouter = new Router();

hotelrouter.get("/",hotel_index);


export default hotelrouter;