import mongoose from "mongoose";

export async function databaseConnection(){
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/");
        console.log("mongoDB connected successfully.");
        mongoose.connection.on('error', error=>
            {
                console.log("connection listener error: ", error)
            })
    } catch (error) {
        console.log("mongoDB connection failed: ",error);
        
    }
}