let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, match: /@/ },
    age: { type: Number, default: 18 },
    bio: { type: String }
}, { timestamps: true });

let User = mongoose.model("User", userSchema);

module.exports = User;