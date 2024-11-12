import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MognoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to Mongo", error.message);
        process.exit(1);
    }
}