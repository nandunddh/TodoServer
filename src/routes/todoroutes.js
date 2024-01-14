const express = require("express");
const { list, create, update, destory, detail } = require("../controllers/todocontroller");

const router = express.Router();

router.get("/list", list);
router.get("/:id", detail);
router.post("/create", create);
router.put("/update", update);
router.delete("/delete", destory);

module.exports = router;