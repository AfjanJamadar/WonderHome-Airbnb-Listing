const express=require("express");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const router=express.Router();
const User=require("../models/user.js");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const { saveRedirectUrl } = require("../middleware.js");

const userController=require("../controllers/user.js");

router.route("/signup")
.get(userController.sign)
.post( wrapAsync(userController.signup));

router.route("/login")
.get(userController.log)
.post(saveRedirectUrl, passport.authenticate("local",
    { failureRedirect: '/login', failureFlash: true}),userController.login);

router.get("/logout",userController.logout);


module.exports=router;
