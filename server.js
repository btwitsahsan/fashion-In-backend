const dotenv = require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleware/errorMiddlerware");

const app = express();

// MiddleWare
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(
    cors({
    origin: ["http://localhost:3000", "https://FashionIn.vercel.app"],
    credentials: true,
}));

const PORT = process.env.PORT || 5000;

//  Routes
app.get("/",(req,res)=>{
    res.send("home page....")
})
// User Routes
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)

//Error Middleware
app.use(errorHandler);



mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
})
.catch((err)=> console.log(err))