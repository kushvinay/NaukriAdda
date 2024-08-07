const jwt = require("jsonwebtoken");
const { catchAsyncErron } = require("../middlewares/catchAsyncError");
const errorHandler = require("../utils/errorHandler");

exports.isAuthenticated = catchAsyncErron(async (req,res,next) => {
    const { token } = req.cookies;
    if(!token){
        return next(new errorHandler("pleas login to access the resource",401 ))
    }

    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    req.id = id;
    next();

})