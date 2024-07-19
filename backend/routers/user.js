const express = require("express");
const router = express.Router();
const inputValidator = require("../middleware/inputValidator.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.post("/signup",inputValidator, (req, res) => {});

router.post("/signin",inputValidator, authMiddleware, (req, res) => {});

router.put("/update", inputValidator, authMiddleware, (req, res) => {});

module.exports = router;