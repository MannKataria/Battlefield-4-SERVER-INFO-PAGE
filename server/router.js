const express = require("express");
const serverStats = require("./stats.json");
const serverSettings = require("./settings.json");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up and running");
});
router.get("/server/:path", (req, res) => {
  const path = req.params.path;
  if (path === "stats") {
    return res.json(serverStats);
  } else if (path === "settings") {
    return res.json(serverSettings);
  }
});

module.exports = router;
