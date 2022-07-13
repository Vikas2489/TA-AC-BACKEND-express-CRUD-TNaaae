let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let User = require("./models/users");
let path = require("path");


// connecting to database
mongoose.connect("mongodb://localhost/users", (err) => {
    console.log(err ? err : "connected true");
})

let app = express();

//middlewares 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// static
app.use(express.static(__dirname + "/public"));

// routing
app.use("/users", require("./routes/users"));

// 404 error
app.use((req, res) => {
    res.send("page not found");
})

// custom error handler
app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(2000, () => {
    console.log("listening on 2000 port");
})