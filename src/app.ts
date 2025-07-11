
import express, { Request, Response } from "express";
import { UsersRoute } from "./app/modules/user/user.routes";
import cors from "cors"
const app = express()
 app.use(express.json())
 app.use(cors())

app.use("/api/v1/user", UsersRoute)




app.get("/", (req:Request,res:Response)=>{
res.send("Tour Management Server Is Running")
})

export default app;