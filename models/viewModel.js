const mongoose = require("mongoose");

let schema = new mongoose.Schema({
views:Number
})
exports.ViewModel = mongoose.model("views",schema)