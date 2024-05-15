import user from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const show_signup_screen = (req,res)=>{
    res.render('signup');
}


export const store_user = async(req,res)=>{
    const firstName = req.body.frist_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    const salt = bcrypt.genSaltSync(10);
    const encryptedpassword = bcrypt.hashSync(password,salt);

    await user.create({
        firstName,
        lastName,
        email,
        password:encryptedpassword,
    });
    res.redirect('/user/login');
}



export const show_login_screen =  async (req,res)=>{
    res.render('login');
}


export const check_user = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const loggeduser =await user.findOne({email}) ;
    const iscorrectpassword = bcrypt.compareSync(password, loggeduser.password); 

    if(!iscorrectpassword)
       return res.send('wrong data entered');
    
    const jwtToken = jwt.sign({name :loggeduser.firstName, email :loggeduser.email,},'sh')
    res.cookie('token',jwtToken);
    
    res.redirect('/');
}

