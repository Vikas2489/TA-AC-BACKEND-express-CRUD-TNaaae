var express = require("express");
var router = express.Router();



router.get("/", (req, res) => {
    res.render("users", { list: ["Vikas", "Arjun", "Prerna", "Sandeep"] });
});

//   - get single user details
router.get("/:id", (req, res) => {
    if (req.params.id !== "new") {
        res.render("singleUser", { name: "vikas", email: "vikas2489@gmail.com", age: 21 });
    }
});
//   - new user form
router.get("/new", (req, res) => {
    res.render("userForm");
});

//   - delete user
router.delete("/:id", (req, res) => {
    res.send(`${req.params.id} got deleted`);
})

//   - update user

router.put("/:id", (req, res) => {
    res.send(`${req.params.id} got updated`);
})

module.exports = router;