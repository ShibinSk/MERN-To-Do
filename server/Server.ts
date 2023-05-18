const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();


const routes = require("./routes/ToDoRoute");

const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;


app.use(express.json());



mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));