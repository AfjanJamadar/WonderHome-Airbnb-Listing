const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wonderhomes";

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
    initData.data=initData.data.map((obj)=>({...obj,owner: '680cee744ccecd4a6cc317c1'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();