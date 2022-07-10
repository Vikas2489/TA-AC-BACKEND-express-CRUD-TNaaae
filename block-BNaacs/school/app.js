let express = require("express")
let mongoose = require("mongoose");
let path = require("path");

// connecting to database
mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "connected to sample database");
})

let app = express();

// setup View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// locals
app.use((req, res, next) => {
    res.locals.message = "Hurrrrrraaaayyyyyyyyyyyyyy!";
    next();
})

// routes
app.get("/", (req, res) => {
    res.render("index", { name: "Vikas", email: "homosapien2489@gmail.com" });
})

app.get("/about", (req, res) => {
    var sports = ["cricket", "khokho", "volleyball"];
    res.render("about", { sports: sports });
})

// error handler
app.use((req, res, next) => {
    res.send("Page not found");
})

app.listen(4000, () => {
    console.log("started listening on 4k port");
})