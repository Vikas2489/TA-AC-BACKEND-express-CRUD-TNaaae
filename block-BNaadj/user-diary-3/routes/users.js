let express = require("express");
let router = express.Router();
let User = require("../models/users")

router.get("/new", (req, res, next) => {
    res.render("userForm");
});

router.post("/", (req, res, next) => {
    User.create(req.body, (err, User) => {
        if (err) {
            return next(err);
        } else {
            res.redirect("/users");
        }
    })
})

router.get("/:id", (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) next(err);
        res.render("singleUserInfo.ejs", { user });
    });
})

router.get("/", (req, res, next) => {
    User.find({}, (err, userArr) => {
        if (err) {
            return next(err);
        } else {
            res.render("allUser", { user: userArr });
        }
    })
})


router.get("/:id/edit", (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) next(err);
        res.render("updateForm", { user });
    });
})

router.post("/:id", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, user) => {
        if (err) next(err);
        res.redirect("/users/" + id);
    });
})

router.get("/:id/delete", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) {
            next(err);
        } else {
            res.redirect("/users");
        }
    });
})







module.exports = router;