const Schema = require("../models/Schema");

const showAll = async (req, res) => {
	const allBlogs = await Schema.find({});
	res.send(allBlogs);
};

const showOne = async (req, res) => {
	const { id } = req.params;
	const blog = await Schema.find({ _id: id });
	res.send(blog);
};

const createOne = async (req, res) => {
	const data = req.body;
	const newBlog = await Schema.create(data);
	res.send(newBlog);
};

module.exports = { showAll, showOne, createOne };
