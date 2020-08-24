const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // configures and points to the env file

const app = express();
const PORT = 2077;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = require("./routes");
app.use(routes);

const db = process.env.MONGO_URI;

mongoose.connect(
	db,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) return console.log(err);
		console.log("Connected to MongoDB");
	}
);

app.listen(PORT, () => {
	console.log(`Server running on Port ${PORT}`);
});
