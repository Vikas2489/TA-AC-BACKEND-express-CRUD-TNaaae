let userRouter = require("./routes/users");
let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");

// connecting to database
mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "connected true");
})

let app = express();

app.use(logger("dev"));

// setup view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// routing middlewares
app.use("/users", userRouter);

// error handler
app.use((req, res) => {
    res.send("Page Not Found");
})

app.listen(4444, () => {
    console.log("listening on 4444 port");
})