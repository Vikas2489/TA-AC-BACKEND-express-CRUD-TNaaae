let express = require("express");
const User = require("../models/user");
let router = express.Router();

router.post("/", (req, res, next) => {
    console.log(req.body);
    User.create(req.body, (err, createdUser) => {
        if (err) {
            res.redirect("/users/new");
        } else {
            res.redirect("/");
        }
    })
})

router.get("/", (req, res, next) => {
    User.find({}, (err, userArr) => {
        if (err) {
            next(err);
        } else {
            res.render("users", { users: userArr });
        }
    })

})


router.get("/:id", (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.render("singleUser", { user: user });
        }
    })
})

router.get("/new", (req, res) => {
    res.render("userForm");
});

module.exports = router;