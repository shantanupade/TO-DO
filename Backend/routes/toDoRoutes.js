const express = require("express");
const { home, createToDo } = require("../controllers/toDoController");
const router = express.Router();

router.get("/home", home);
router.post("/createToDo", createToDo);

module.exports = router;
