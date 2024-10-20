const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = expressAsyncHandler(async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        res.status(401);
        throw new Error ("Not Authorized, Please Login")
    }
    // Verify Token
    const verified = await jwt.verify(token, process.env.JWT_SECRET)

    // get user id using token
    const user = await User.findById(verified.id).select("-password");

    if(!user){
        res.status(401);
        throw new Error ("User Not Found")
    }

    req.user = user;
    next();

});


module.exports = {
    protect,
}