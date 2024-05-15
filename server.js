import express from 'express';
import mongoose from 'mongoose';
import  hotelrouter  from './routes/hotelRoute.js';
import  userrouter  from './routes/userRoute.js';
import  reservationrouter from './routes/reservationRoute.js'
import cookieParser from 'cookie-parser';
import  auth  from './middleware/auth.js';

mongoose.connect('mongodb://localhost:27017/projecDB');
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(cookieParser())


app.use('/hotel',auth,hotelrouter);
app.use('/user',userrouter);
app.use('/reservation',auth,reservationrouter);
app.get("/",auth,(req,res)=>{
    res.render('home');
});

app.listen(5000,()=>{
    console.log("server running on port 5000 -> http://localhost:5000");
})  