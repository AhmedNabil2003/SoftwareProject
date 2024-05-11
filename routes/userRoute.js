import { Router } from "express";
import { create_user, index_user, login_user, store_user } from "../controllers/userController.js";

const userrouter = new Router();

userrouter.get('/',index_user);

userrouter.get("/create",create_user);


userrouter.post('/',store_user);



userrouter.get("/login",login_user);

export  default userrouter;