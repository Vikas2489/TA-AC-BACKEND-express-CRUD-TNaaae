let express = require("express");
const User = require("../models/user");
let router = express.Router();



router.post("/", (req, res, next) => {
    console.log(req.body);
    User.create(req.body, (err, createdUser) => {
        if (err) {
            // next(err);
            res.redirect("/users/new");
        } else {
            res.redirect("/");
        }
    })
})

router.get("/new", (req, res) => {
    res.render("userForm");
});

module.exports = router;