import { Router } from "express";
import { show_reservation_screen, store_reservation } from "../controllers/reservationController.js";


const reservationrouter = new Router();

// open reservation screen
reservationrouter.get('/',show_reservation_screen);

// insert a new reservation 
reservationrouter.post('/',store_reservation);


export  default reservationrouter;
