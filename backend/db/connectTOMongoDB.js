import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connection Successfull");
    }catch (error) {
        console.log("MongoDB Connection Error: ", error.message)
    }
}

export default connection;