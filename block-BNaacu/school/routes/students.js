let express = require("express");
const Students = require("../models/students");
let router = express.Router();


router.get("/new", (req, res) => {
    res.render("studentsForm");
})


router.post("/", (req, res) => {
    Students.create(req.body, (err, student) => {
        if (err) {
            console.log(err);
        } else {
            res.json(student);
        }
    })
})


router.get("/", (req, res) => {
    res.render("allstudents", { list: ["vikas", "ankit", "arjun"] });
});


// - get single student details => GET request on "/students/:id"
//   - render an ejs template
//   - pass a student object to template for displaying student data
//   ```js
//   res.render('studentDetail', {
//     student: { name: 'rahul', email: 'rahul@altcampus.io' },
//   });
// ```
router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.render("students", { name: "rahul", email: "rahul@altcampus.io" });
});

module.exports = router;