const mongodb = require("mongodb").MongoClient;

const mongodb_url = "mongodb://localhost:27017"

const connectDB = async ()=>{
    try{
       const client =  await mongodb.connect(mongodb_url);
        const db = client.db("blinkit")
        console.log("MongoDB Connected Successfully ");
        return db;
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;