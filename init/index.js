const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb+srv://afjanjamadar:VoMZiJbPriokt0N3@cluster0.7c0bflc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main(){
    await mongoose.connect(MONGO_URL);
};

main()
 .then(()=>{
    console.log("connected to db");
})
 .catch(err =>{
    console.log(err);
});

const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner: '6815c38a17ee2764ae9e3e37'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();