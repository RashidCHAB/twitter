import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(routes)

mongoose.connect("mongodb+srv://RashidChab:123@cluster0.4agwvmc.mongodb.net/twitter", () => {
   console.log("Database connected succesfully")
   app.listen(3000, () => {
     console.log("App started at http://localhost:3000");
   }
   )
})