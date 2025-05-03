const User=require("../models/user.js");

module.exports.signup=async(req,res) => { 
    try{
        let {username,email,password}=req.body;
        let newUser= new User({username,email});
        let registeredUser=await User.register(newUser,password);
        req.login(registeredUser,(err)=>{

            if(err){
                return next(err);
            }

            req.flash("success","Welcome to WonderHomes!!!");
            res.redirect("/listings");
        });
       
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
   
};

module.exports.login=async(req,res)=>{
    req.flash("success","Welcome to WonderHomes");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res)=>{
    req.logout((err)=>{
       console.log(err);
    });
    
    req.flash("success","Logged out successfully");
    res.redirect("/listings");
};

module.exports.sign=(req,res)=>{
    res.render("./listings/signup.ejs");

};

module.exports.log=(req,res)=>{

    res.render("./listings/login.ejs");
}
