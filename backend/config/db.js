import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sachinbind9891:646800@cluster0.mupvmoa.mongodb.net/food-del')
        .then(() => console.log("mongodb connected"))
        .catch(err => console.error("Failed to connect to MongoDB", err));
}
