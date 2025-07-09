

import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";





const startServer = async ()=>{
    try{
        
await mongoose.connect(envVars.DB_URL)

    console.log("Connected to DB!!");

    app.listen(envVars.PORT, ()=>{
        console.log(`Server is Listening to port ${envVars.PORT}`);
    })
    }catch(error){
console.log(error);
    }
}

startServer();
