let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
// let User = require("./models/users");

// connecting to database
mongoose.connect("mongodb://localhost/user", (err) => {
    console.log(err ? err : "connected true");
});

let app = express();

app.use(logger("tiny"));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static 
app.use(express.static(__dirname + "/public"));

// setup engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// routing middlewares
app.use("/users", require("./routes/users"));

// 404 error
app.use((req, res) => {
    res.status(404).send("page not found");
});

// custom error handler
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(3000, () => console.log("listening on 3k port"));