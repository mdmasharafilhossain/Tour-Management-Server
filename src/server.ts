

import mongoose from "mongoose";
import app from "./app";





const startServer = async ()=>{
    try{
        
await mongoose.connect("mongodb+srv://Tour-Management-L2:7XnwneOLXHNJc9Tx@cluster0.lzichn4.mongodb.net/Tour-Management-L2?retryWrites=true&w=majority&appName=Cluster0")

    console.log("Connected to DB!!");

    app.listen(5000, ()=>{
        console.log("Server is Listening to port 5000");
    })
    }catch(error){
console.log(error);
    }
}

startServer();
