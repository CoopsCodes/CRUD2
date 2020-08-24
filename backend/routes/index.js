const express = require("express");
const { showAll, showOne, createOne } = require("../controllers");

const router = new express.Router();

router.get("/", showAll);
router.get("/:id", showOne);
router.post("/", createOne);

module.exports = router;
