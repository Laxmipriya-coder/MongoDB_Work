const mongodb =require("mongodb");

const mongodb_url = "mongodb://localhost:27017"

const connectMongoDB = async ()=>{
    try {
        const client = await mongodb.connect(mongodb_url);
        const db = client.db("flipkart");
        console.log("MongoDB connected successfully");
        return db;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectMongoDB;
