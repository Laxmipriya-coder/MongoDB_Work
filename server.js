const connectDB = require("./config/db.js");

async function connection(){
    const db = await connectDB();
    const collection = await db.createCollection("products");
    const product = await collection.insertOne({
        productname:"Iphone-18 Pro",
        price:180000
    });
    console.log(product);
}

connection();




