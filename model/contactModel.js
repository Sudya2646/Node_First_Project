const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    Team: String,
    Game: String,
    Rating: Number
});

module.exports = mongoose.model("details", contactSchema)