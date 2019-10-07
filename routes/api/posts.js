const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => res.json({ poruka: "Postovi rade!" }));

module.exports = router;
