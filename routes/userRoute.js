import { Router } from "express";
import { check_user, show_login_screen, show_signup_screen, store_user } from "../controllers/userController.js";

const userrouter = new Router();

// open signip screen
userrouter.get('/',show_signup_screen);

// insert a new user 
userrouter.post('/',store_user);

// open login screen
userrouter.get("/login",show_login_screen);

// loginng check
userrouter.post('/login/check',check_user)

export  default userrouter;