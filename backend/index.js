import express from "express" 
import mongoose from "mongoose" 
import cors from "cors" 
import menuRoutes from "./routes/menuRoutes.js" 
import userRoutes from "./routes/userRoutes.js" 
const PORT = 1234 
const app = express() 
const MongoDBURI =
  "mongodb+srv://mythasad:ILoveYouTasmi@simple-admin.gemny.mongodb.net/SimpleAdmin?retryWrites=true&w=majority&appName=simple-admin" 

app.use(cors()) 
app.use(express.json()) 

app.get("/", (req, res) => {
  console.log(req) 
  res.status(200).send("Server s is running.") 
}) 

app.use("/menu", menuRoutes)
app.use("/", userRoutes)

mongoose
  .connect(MongoDBURI)

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to the port ${PORT}.`) 
    }) 
    console.log("Server is connected to the database.") 
  })
  .catch(() => {
    console.error("Connection to databse failed.") 
  }) 
