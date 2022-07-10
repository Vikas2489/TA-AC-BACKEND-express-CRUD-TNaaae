let express = require("express")
let mongoose = require("mongoose");
let path = require("path");
let logger = require("morgan");
let Students = require("./models/students");

// connecting to database
mongoose.connect("mongodb://localhost/sample", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected true");
    }
})

let app = express();


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());
app.use(logger("dev"));

// setup View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routing middlewares
app.use("/students", require("./routes/students"));

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
app.use((req, res) => {
    res.send("Page not found");
})

app.listen(5000, () => {
    console.log("started listening on 5k port");
});