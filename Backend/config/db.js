const mongoose = require("mongoose");
const { MONGO_URI } = process.env 

const connectToDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn)=>{
        console.log("Database connected successfully...")
        console.log(`Host name ${conn.connection.host}`);
    })
    .catch((error)=>{
        console.log("Database connection failed!")
        console.log(`DB connection Error: ${error}`)
        process.exit(1)
    })
}

module.exports = connectToDB;