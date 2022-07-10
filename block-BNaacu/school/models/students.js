var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentsSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, default: 18 },
    email: { type: String, required: true, lowercase: true },
    grades: { type: String, required: true }
}, { timestamps: true });

var Students = mongoose.model("Students", studentsSchema);

module.exports = Students;