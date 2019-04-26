// require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const jwt = require("express-jwt");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log(`Listening to ${PORT}`);
});

