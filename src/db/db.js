const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb://srujanpoojari2_db_user:r3PoUBSPTDQqJc6m@ac-zt7gxi0-shard-00-00.nl9tsyo.mongodb.net:27017,ac-zt7gxi0-shard-00-01.nl9tsyo.mongodb.net:27017,ac-zt7gxi0-shard-00-02.nl9tsyo.mongodb.net:27017/?ssl=true&replicaSet=atlas-h7f5t5-shard-0&authSource=admin&appName=mydb/mydatabase",
  );
  console.log("Connected to MongoDB");
}

module.exports = connectDB;
