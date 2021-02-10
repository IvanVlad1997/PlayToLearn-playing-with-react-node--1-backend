const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
//routes
const interviuRoutes = require('./routes/test')


const app = express();

new mongoose
    .connect(
        process.env.DATABASE,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.log(`Connection failed! Error: ${error}`);
    });

//middlewares

app.use(morgan("dev"));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//routes middleware
app.use('/api', interviuRoutes)


module.exports = app;
