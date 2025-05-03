const express=require("express");
const router=express.Router();
const methodOverride=require("method-override");
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn}=require("../middleware.js");
const {isOwner}=require("../middleware.js");
const {validateListing}=require("../middleware.js")
const listingController= require("../controllers/listings.js");

const multer=require('multer');
const {storage}=require("../cloudConfig.js");
const upload=multer({ storage });

//New Listing
router.get("/new",isLoggedIn,listingController.renderNew);

router.route("/")
.get(wrapAsync(listingController.indexRoute))
.post(isLoggedIn ,upload.single('listing[image]'),validateListing,
 wrapAsync(listingController.createListings));


router.route("/:id")
.get(wrapAsync(listingController.showListings))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListings))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.deleteListings));


//edit listings
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListings));

module.exports=router;