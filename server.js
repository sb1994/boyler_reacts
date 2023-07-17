const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const passport = require("passport");
const jwt = require("jsonwebtoken");

const cors = require("cors");

dotenv.config();

const app = express();

// const dbConnect = require("./utils/dbConnect");
// dbConnect();

// app.use(passport.initialize());
// require("./utils/passport")(passport);

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
const http = require("http");
const server = http.createServer(app);
//api routes
app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
