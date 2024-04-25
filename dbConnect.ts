import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const db = await mongoose.connect(String(process.env.NEXT_PUBLIC_MONGO_DB_URL));
        console.log(`Database connected : ${db.connection.host}`);
        return db;
    } 
    catch(error) {
        console.error(error)
    }
}