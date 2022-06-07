require('dotenv').config()

const mongoose = require('mongoose');
const express = require ('express');
const app = express();
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");


//my routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

//this is my DB connection
mongoose
.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> {
    console.log("DB CONNECTED");
});

// Middlewares
app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//PORT
const port = process.env.PORT||4000;

//Starting Server
app.listen(port,() => {
    console.log(`App is running at ${port}`)
});













  




































































































































