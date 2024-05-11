import user from "../models/userModel.js";



export const index_user = (req,res)=>{
    res.render('signup');
}

export const create_user = async (req,res)=>{
    await user.create({
        firstName:"ali",
        lastName:"mansour",
        email:"ali@gmail.com",
        password:"omarpassword",
    });
    res.send("done");
}

export const store_user = async(req,res)=>{
    const firstName = req.body.frist_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    await user.create({
        firstName,
        lastName,
        email,
        password,
    });
    res.redirect('/user');
}



export const login_user =  async (req,res)=>{
    res.render('login');
}

