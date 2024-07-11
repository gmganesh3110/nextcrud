const { default: mongoose } = require("mongoose");

const connectMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Database Connected")
    } catch (err) {
        console.log("Database is not connected")
    }
}

export default connectMongoDB