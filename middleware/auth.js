import jwt from 'jsonwebtoken'

 const auth = (req, res, next) => {
    const {token} = req.cookies;
    try{
        const decoded = jwt.verify(token,'sh');
        req.user = decoded;
        next();
    }
    catch(error){
        return res.redirect('/user/login');
    }
}

export default auth;
