const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => res.json({ poruka: "Profili rade!" }));

module.exports = router;
