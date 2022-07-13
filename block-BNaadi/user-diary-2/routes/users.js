const { Router } = require("express");
let express = require("express");
let router = express.Router();
let User = require("../models/users");

router.get("/", (req, res, next) => {
    User.find({}, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.render("listUser", { user: user });
        }
    });
});

router.post("/", (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.redirect("/users");
        }
    });
});

router.get("/:id", (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.render("singleUser", { user: user });
        }
    })
});


router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, (err, user) => {
        console.log(user);
        if (err) {
            return next(err);
        } else {
            res.redirect("/users/" + id);
        }
    })
});

router.delete("/:id", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err) => {
        if (err) {
            next(err);
        } else {
            res.render("listUser");
        }
    });
})

module.exports = router;