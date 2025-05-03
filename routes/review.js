const express=require("express");
const router=express.Router({mergeParams :true});
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview}=require("../middleware.js");
const {isReviewAuthor,isLoggedIn}=require("../middleware.js");

const reviewController=require("../controllers/review.js");


//reviews post show
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.postReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;
