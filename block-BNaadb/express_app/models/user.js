let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    email: { type: String, lowercase: true, required: true, match: /@/ },
    profession: String,
}, { timestamps: true })

let User = mongoose.model("User", userSchema);

module.exports = User;