var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlogSchema = {
	title: String,
	author: String,
	body: String,
	comments: String,
	date: { type: Date, default: Date.now },
};

module.exports = mongoose.model("Blog", BlogSchema);
