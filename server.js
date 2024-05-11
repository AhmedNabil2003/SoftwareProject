import express from 'express';
import mongoose from 'mongoose';
import  hotelrouter  from './routes/hotelRoute.js';
import  userrouter  from './routes/userRoute.js';

mongoose.connect('mongodb://localhost:27017/projecDB');
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use('/hotel',hotelrouter);
app.use('/user',userrouter);
app.get("/",(req,res)=>{
    res.render('home');
});

app.listen(5000,()=>{
    console.log("server running on port 5000 -> http://localhost:5000");
})